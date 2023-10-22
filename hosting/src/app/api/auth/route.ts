import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { COOKIE_FIREBASE_SESSION_KEY } from "@/server/constants/cookieKey";
import { auth } from "@/server/firebase/firebase.server.config";
import { getUserData } from "@/server/user/user";

export async function GET() {
  try {
    const sessionCookie: string | undefined = cookies().get(COOKIE_FIREBASE_SESSION_KEY)?.value;

    if (!sessionCookie) return NextResponse.json({ error: "IdToken Required" }, { status: 400 });

    const user = await getUserData(sessionCookie);

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; //5日
  try {
    cookies().delete(COOKIE_FIREBASE_SESSION_KEY);
    const body: { id: string } = await request.json();

    if (!body) return NextResponse.json({ error: "IdToken Required" }, { status: 400 });

    const sessionCookie = await auth.createSessionCookie(body.id, { expiresIn });

    if (!sessionCookie) return NextResponse.json({ error: "Not Found User" }, { status: 404 });
    cookies().set(COOKIE_FIREBASE_SESSION_KEY, sessionCookie, { httpOnly: true, secure: true });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    cookies().delete(COOKIE_FIREBASE_SESSION_KEY);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
