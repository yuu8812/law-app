namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_ENV: "local" | "development" | "staging";
    NEXT_PUBLIC_APP_API_KEY: string;
    NEXT_PUBLIC_APP_APP_ID: string;
    NEXT_PUBLIC_APP_AUTH_DOMAIN: string;
    NEXT_PUBLIC_APP_MESSAGING_SENDER_ID: string;
    NEXT_PUBLIC_APP_PROJECT_ID: string;
    NEXT_PUBLIC_APP_STORAGE_BUCKET: string;
    NEXT_PUBLIC_APP_MEASUREMENT_ID: string;
  }
}
