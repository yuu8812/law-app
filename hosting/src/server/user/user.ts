import { auth } from "@/server/firebase/firebase.server.config";

export const getUserData = async (sessionCookie: string) => {
  const user = await auth.verifySessionCookie(sessionCookie);

  return user;
};
