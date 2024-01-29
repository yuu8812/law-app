"use server";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = createHttpLink({
  uri: process.env.API_URL,
});

const authLink = setContext((_, { headers }) => {
  const authorizationHeader = { "x-hasura-admin-secret": process.env.X_HASURA_API_SECRET };
  return {
    headers: {
      ...headers,
      ...authorizationHeader,
    },
  };
});

const { getClient: adminClient } = registerApolloClient(() => {
  if (process.env.NEXT_PUBLIC_APP_ENV !== "local") throw new Error("error");
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});

export { adminClient };
