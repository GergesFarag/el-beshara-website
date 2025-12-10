import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const res = NextResponse.next();

  // LOCALE
  const cookieLocale = req.cookies.get("locale")?.value || "en";
  res.cookies.set("locale", cookieLocale);

  // Token
  const token = req.cookies.get("token")?.value;

  // Paths to protect
  const isProtected = req.nextUrl.pathname.startsWith("/admin");

  if (isProtected && !token) {
    console.log("Redirecting to login because token missing");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/admin"],
};

