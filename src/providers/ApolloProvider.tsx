"use client";

import { ApolloNextAppProvider } from "@apollo/experimental-nextjs-app-support/ssr";

import { makeClient } from "@/apiCaller/client";

const WithApollo = ({ children }: React.PropsWithChildren) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};

export default WithApollo;
