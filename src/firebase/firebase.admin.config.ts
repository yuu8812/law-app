import admin from "firebase-admin";

/**
 * @description Firebaseの管理画面から取得した管理者アカウント情報
 * @note 環境変数は`.env.local`ファイルに定義しています
 */
const serviceAccount: admin.ServiceAccount = {
  projectId: "so-se-ji-api",
  clientEmail: process.env.APP_CLIENT_EMAIL,
  privateKey: (process.env.APP_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
  
};

/**
 * @description Firebase Admin SDKを扱うためのオブジェクト
 * @note バックエンドのみで使用可能
 */
export const firebaseAdmin =
  admin.apps[0] ||
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
