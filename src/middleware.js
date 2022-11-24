import { NextResponse } from "next/server";

export const middleware = async (req) => {
  // return NextResponse.rewrite(new URL("/about-2", req.url));
  // const secret = process.env.SECRET;
  // const cookieName = process.env.COOKIE_NAME;
  // let cookieToken = req.cookies.get("userJWT");
  // let url = req.url;

  // // console.log("a")

  // if (!cookieToken && url.includes("/admin")) {
  //   return NextResponse.redirect("http://localhost:3000/");
  // }
  // if (url.includes("/api")) {
  //   return NextResponse.redirect("http://localhost:3000/");
  // }

  const secret = process.env.SECRET;
  const cookieName = process.env.COOKIE_NAME;
  const url = req.url;
  const cookieToken = req.cookies.get(cookieName);

  if (url.includes("/admin")) {
    if (cookieToken === undefined) {
      return NextResponse.redirect("http://localhost:3000/");
    }

    try {
      // pilas aquiii, no funciona bien la veryficacion del token
      // jwtVerify(cookieToken, new TextEncoder().encode(secret));

      return NextResponse.next();
    } catch (err) {
      return NextResponse.redirect("http://localhost:3000/");
    }
  }
  //si coloco esto da un error total en la api
  // if (url.includes("/api")) {
  //   return NextResponse.redirect("http://localhost:3000/");
  // }

  if (url.includes("/login")) {
    if (cookieToken !== undefined) {
      try {
        // jwtVerify(cookieToken, new TextEncoder().encode(secret));

        return NextResponse.redirect("http://localhost:3000/");
      } catch (e) {
        if (e.message === "invalid token") {
          return NextResponse.redirect("http://localhost:3000/");
        }
      }
    }
  }

  return NextResponse.next();
};
