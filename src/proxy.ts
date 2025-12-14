// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { jwtDecode } from "jwt-decode";

// export function proxy(req: NextRequest) {
//     const res = NextResponse.next();
//     const token = req.cookies.get("token")?.value;
//     const isSuperAdmin = req.cookies.get("isSuperAdmin")?.value === "true";

//   // LOCALE
//   // const cookieLocale = req.cookies.get("locale")?.value || "en";
//   // res.cookies.set("locale", cookieLocale);

//   // Token

//   if (token) {
//     try {
//       const decoded = jwtDecode(token) as { exp: number };
//       const isExpired = decoded.exp * 1000 < Date.now();

//       if (isExpired) {
//         const response = NextResponse.redirect(new URL("/login", req.url));
//         response.cookies.delete("token");
//         response.cookies.delete("isSuperAdmin");
//         return response;
//       }
//     } catch (error) {
//       console.log("Error decoding token:", error);
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }

//   // Paths to protect
//   const isProtected = req.nextUrl.pathname.startsWith("/admin");
//   const SuperAdminPage = req.nextUrl.pathname.startsWith("/admin/admins");

//   if (isProtected && !token ) {
//     console.log("Redirecting to login because token missing");
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   if (SuperAdminPage && !isSuperAdmin) {
//     console.log("Redirecting to login because isSuperAdmin missing");
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return res;
// }

// export const config = {
//   matcher: ["/admin/:path*", "/admin"],
// };

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";

export function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const isSuperAdmin = req.cookies.get("isSuperAdmin")?.value === "true";

  // Read locale cookie (no need to set it again every request)
  // const cookieLocale = req.cookies.get("locale")?.value || "en";

  // If token exists → validate
  if (token) {
    try {
      const decoded = jwtDecode<{ exp: number; username: string }>(token);

      // Token expired?
      if (decoded.exp * 1000 < Date.now()) {
        const res = NextResponse.redirect(new URL("/login", req.url));
        res.cookies.delete("token");
        res.cookies.delete("isSuperAdmin");
        return res;
      }
      const res = NextResponse.next();
      res.cookies.set("username", decoded.username, { path: "/" });
      return res;
    } catch (err) {
      console.log("Invalid token:", err);
      const res = NextResponse.redirect(new URL("/login", req.url));
      res.cookies.delete("token");
      res.cookies.delete("isSuperAdmin");
      return res;
    }
  }

  const path = req.nextUrl.pathname;

  // Protected pages
  const isProtected = path.startsWith("/admin");
  const isSuperAdminPage = path.startsWith("/admin/admins");

  // If user not logged in
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If user entered super-admin-only page
  if (isSuperAdminPage && !isSuperAdmin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
