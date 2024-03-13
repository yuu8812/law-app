import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [process.env.NEXT_PUBLIC_API_URL]: {
        headers: {
          "x-hasura-admin-secret": process.env.X_HASURA_ADMIN_SECRET,
          "x-hasura-role": "admin",
        },
      },
    },
  ],
  generates: {
    "src/graphql/type.ts": {
      documents: "src/graphql/schema/**/*.graphql",
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        skipTypename: false,
        enumsAsConst: true,
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
