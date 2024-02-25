import admin from "firebase-admin";

/**
 * @description Firebaseの管理画面から取得した管理者アカウント情報
 * @note 環境変数は`.env.local`ファイルに定義しています
 */
const serviceAccount: admin.ServiceAccount = {
  // projectId: process.env.APP_PROJECT_ID,
  // clientEmail: process.env.APP_CLIENT_EMAIL,
  // privateKey: (process.env.APP_PRIVATE_KEY || "").replace(/\\n/g, "\n"),

  projectId: "so-se-ji-api",
  clientEmail: "firebase-adminsdk-9ry4k@so-se-ji-api.iam.gserviceaccount.com",
  privateKey:"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDiHr11aEaLrRW9\nYmLyOnMf9ijTvjOMyF3l2EqMhxHr8bXD8j9rg9mDda7ffGvWJ9rEuI3F0E2Sj11S\nSRnll1pkAOoOuC2MxhSjdX5stwHPfmUb3rvXHE8yI7hBEIU3GaP2kH+4cMAHiY5l\n7hVvULaKqqcHf0PNV/J/tN3p3QY135TG3e7pYsSX9MU+jAdki0durtMA0AEFpz8O\n/5TlCfmqXZZIimQUb8Hydg7g2rLfkU23FATC65ktiMLmAl9UedmGBSI9OeDDbfGl\nK+nySMP9k7xFhSpCdh8qtWE4kXJyr+QSAx1zaI8EA+94iGVOdjwxHOipcTZRUCAm\nEUKYkQMdAgMBAAECggEAGB58Sf417Ccptvo8IKdQaVvZ7gAPQpiKv34LMaMkq7ys\nDTsVPbQiKu4OGaONYxn8MViYMr3t0FC/fQv0GbPDvgAE9034+deVEvxw4ErDBC1w\nvoDLG35XCjuaJ0KKWx6+iQnPvc41BXjMOh4jpix/VBow19Fg25HieXHC6/OZ+nvr\n59C3Y4HDEQtd03ZPsWdmqMlZ8QGyP6gXK6nNxqSZA4abf1ciLhlEPzl+MVJTIWw+\nWW06Z0LI+XWcLRgSuT1slWhIFhg6U5Lhqr539VY537+VR8aouSL8ON0PI1+S/HqD\n+fRQPVMcAL2X0IyNe8IHXesxlQPTCPbFb1n05gdh1wKBgQD5dBT/XHDxHTo7CHIm\ndzrGHzjPdM30YkFrXb/oVNCHrQtxw3PthJGoldZUiOcYOTk4MxMz4n0Wd3uKGpmE\nNZrVVlKNptn8IPVthUIH2rmdswCzsyT4x7n1+5II/NxCLrVmNsMkhajRBKXpMJ4l\noenHAqCRHE3bzWhEYfqjOfHpCwKBgQDoDeVmtSF8XWXI98kDc+4oIY5XGmwrBVjL\nzz4L8e8nUIUG4IHyBYiAuatgX0shXq5fLDzhfBnoO/jWVMjdao/GUjMaPaFNI+s5\nFVfsGMLLw8q3AN0ptHXojapLIBZw6w/0CK+kM18M5zr+kSTSskw4PvaHQtGmZuiq\n9r1GsSxtdwKBgQCZOu4fAmi6I2r+kiyUZk7rHoimHqjYgnaO/jKBA4BopypNgnM2\npmVW+luC5+mUnqoAVJdqGqkd4N05Myez572paHIjYyep0ZEQ6ndqHbhBH5DB0bxX\nOVCIwjStYq3l1Y1GMUNjrtrJMiK8AEpU8YWJ4ppBKPLGnwF6Z/kuxMxNiwKBgDXq\nfKFndldJ8AtInxjBR9VlLohIaFd6j44TIcxusu1EhRP699Y+uN+HxCzJF1Cyifss\n8RxG1FIkFQXffygKyUr/8EWpih+9N7r0nZAKlL/5RtFMTxaQilC1EZsQ4oXr57IA\njqatFOmPlCJvoMmfiZwL7QWyXbm28Vo/p+yT38mzAoGASKWKNB3Kj1eyP4Wcjwqp\n7lfC6Y4oV8JHX4njNlU1JBIuzrGTN8wyNK/MviaSUwxI+F4Cc7h9xkBaMtSJlP2w\nQQHYgS+03sa2Wyc2MbRtn+MmtsUh9hAsRhgK5q5CD3WCJ47JDzzdaZUFgqwkLq82\n/xFVhJtVwM98YCr0xt6fbJ0=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
 
  
  
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
