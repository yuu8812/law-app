"use server";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { cookies } from "next/headers";

import { firebaseAdmin } from "@/firebase/firebase.admin.config";

const httpLink = createHttpLink({
  uri: process.env.API_URL,
});

const authLink = setContext((_, { headers }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("session")?.value;

  if (token) {
    firebaseAdmin
      .auth()
      .verifyIdToken(token)
      .catch(() => {
        throw new Error("Invalid token");
      });
  }

  const authorizationHeader = token ? { Authorization: `Bearer ${token}` } : {};

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
