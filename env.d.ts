declare module "process" {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_APP_ENV: "local" | "development" | "staging";
        // client firebase app credentials
        NEXT_PUBLIC_APP_API_KEY: string;
        NEXT_PUBLIC_APP_APP_ID: string;
        NEXT_PUBLIC_APP_AUTH_DOMAIN: string;
        NEXT_PUBLIC_APP_MESSAGING_SENDER_ID: string;
        NEXT_PUBLIC_APP_PROJECT_ID: string;
        NEXT_PUBLIC_APP_STORAGE_BUCKET: string;
        NEXT_PUBLIC_APP_MEASUREMENT_ID: string;
        NEXT_PUBLIC_FUNCTION_URI: string;
        FIREBASE_CREDENTIALS: string;
        // server firebase app credentials
        APP_PROJECT_ID: string;
        APP_PRIVATE_KEY: string;
        APP_CLIENT_EMAIL: string;
        // api url
        NEXT_PUBLIC_API_URL: string;
        //gcs
        GCS_CLIENT_EMAIL: string;
        GCS_PRIVATE_KEY: string;
        GCS_BUCKET_NAME: string;
        // HASURA SECRET
        X_HASURA_API_SECRET: string;
      }
    }
  }
}
