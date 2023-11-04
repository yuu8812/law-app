import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { cookies } from "next/headers";

const cookieStore = cookies();

const httpLink = createHttpLink({
  uri: process.env.API_URL,
});
const token = cookieStore.get("token");

const authorizationHeader = token ? { authorization: `Bearer ${process.env.APP_PRIVATE_KEY}` } : {};

const authLink = setContext((_, { headers }) => {
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
