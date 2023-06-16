declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly NEXT_PUBLIC_APP_ENV?: string;
    readonly NEXT_PUBLIC_APP_API_KEY?: string;
    readonly NEXT_PUBLIC_APP_AUTH_DOMAIN?: string;
    readonly NEXT_PUBLIC_APP_PROJECT_ID?: string;
    readonly NEXT_PUBLIC_APP_STORAGE_BUCKET?: string;
    readonly NEXT_PUBLIC_APP_MESSAGING_SENDER_ID?: string;
    readonly NEXT_PUBLIC_APP_APP_ID?: string;
  }
}
