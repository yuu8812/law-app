"use client";
// ^ this file needs the "use client" pragma

import { ApolloLink, HttpLink, split } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { createClient } from "graphql-ws";

// have a function to create a client for you
const makeClient = () => {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: process.env.NEXT_PUBLIC_API_URL,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });

  // const token = Cookies.get("session");

  const wsLink =
    typeof window !== "undefined"
      ? new GraphQLWsLink(
          createClient({
            url: process.env.NEXT_PUBLIC_API_SUB_URL,
            connectionParams: () => ({
              // authToken: token,
              headers: {
                "x-hasura-admin-secret": process.env.NEXT_PUBLIC_X_HASURA_API_SECRET,
              },
            }),
          }),
        )
      : null;

  const link =
    typeof window !== "undefined" && wsLink != null
      ? split(
          ({ query }) => {
            const def = getMainDefinition(query);
            return def.kind === "OperationDefinition" && def.operation === "subscription";
          },
          wsLink,
          httpLink,
        )
      : httpLink;

  const authLink = setContext((_, { headers }) => {
    // const authorizationHeader = token ? { Authorization: `Bearer ${token}` } : {};
    const authorizationHeader = {
      "x-hasura-admin-secret": process.env.NEXT_PUBLIC_X_HASURA_API_SECRET,
    };

    return {
      headers: {
        ...headers,
        ...authorizationHeader,
      },
    };
  });

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            worlds_by_pk: {
              merge(existing, incoming) {
                return incoming;
              },
            },
          },
        },
      },
    }),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : authLink.concat(link),
    connectToDevTools: true,
  });
};

export { makeClient };
