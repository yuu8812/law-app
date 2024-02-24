"use server";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // const cookieStore = cookies();
  // const token = cookieStore.get("session")?.value;

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

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });
});
