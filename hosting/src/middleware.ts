import { NextResponse, userAgent } from "next/server";

export async function middleware(request: Request) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-url", request.url);

  console.log(request.headers.get("Authorization" ?? ""));

  if (request.url === process.env.NEXT_PUBLIC_CLIENT_API_UTL) {
    const isBot = userAgent({ headers: request.headers }).isBot;
    if (isBot) return new NextResponse("Resource Forbidden", { status: 4030 });
    if (request.method === "POST") {
      return NextResponse.rewrite(process.env.NEXT_PUBLIC_API_URL, { headers: requestHeaders });
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
