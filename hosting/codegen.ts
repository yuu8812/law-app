import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.API_URL]: {
        headers: {
          // "x-hasura-admin-secret": process.env.X_HASURA_API_SECRET
        },
      },
    },
  ],
  generates: {
    "src/graphql/type.ts": {
      documents: "src/graphql/schema/**/*.graphql",
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        defaultScalarType: "unknown",
        scalars: {
          uuid: "string",
          bigint: "number",
          date: "string",
          timestamptz: "string",
        },
      },
      hooks: {
        afterAllFileWrite: ["prettier --write"],
      },
    },
  },
};

export default config;
