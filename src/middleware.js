import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const middleware = async (req) => {
  // return NextResponse.rewrite(new URL("/about-2", req.url));
//   const secret = process.env.SECRET;
//   const cookieName = process.env.COOKIE_NAME;
//   const url = req.url;
//   const cookieToken = req.cookies.get(cookieName);

//   if (url.includes("/admin") || url.includes("/api")) {
//     if (cookieToken === undefined) {
//       const newUrl = new URL("/", req.url);
//       // loginUrl.searchParams.set("from", req.nextUrl.pathname);

//       return NextResponse.redirect(newUrl);
//     }

//     try {
//       // pilas aquiii, no funciona bien la veryficacion del token
//       jwtVerify(cookieToken, new TextEncoder().encode(secret));

//       return NextResponse.next();
//     } catch (err) {
//       const newUrl = new URL("/login", req.url);
//       // loginUrl.searchParams.set("from", req.nextUrl.pathname);

//       return NextResponse.redirect(newUrl);
//     }
//   }

//   if (url.includes("/login")) {
//     if (cookieToken !== undefined) {
//       try {
//         jwtVerify(cookieToken, new TextEncoder().encode(secret));
//         const newUrl = new URL("/", req.url);

//         // loginUrl.searchParams.set("from", req.nextUrl.pathname);

//         return NextResponse.redirect(newUrl);
//       } catch (e) {
//         if (e.message === "invalid token") {
//           const newUrl = new URL("/", req.url);

//           return NextResponse.redirect(new URL("/", newUrl));
//         }
//       }
//     }
//   }

  return NextResponse.next();
};
