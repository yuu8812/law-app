import { credential } from "firebase-admin";
import * as firebase from "firebase-admin";
import { getApp, getApps, initializeApp } from "firebase-admin/app";

const app = !getApps().length
  ? initializeApp({
      credential: credential.cert({
        clientEmail: process.env.APP_CLIENT_EMAIL,
        privateKey: process.env.APP_PRIVATE_KEY.replace(/\\n/g, "\n"),
        projectId: process.env.APP_PROJECT_ID,
      }),
    })
  : getApp();

const auth = firebase.auth();

export { app, auth };
