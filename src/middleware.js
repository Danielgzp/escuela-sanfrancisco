import { NextResponse } from "next/server";

// const { JwtStrategy } = require("utils/strategies/jwt.strategy");
// const jwt = require("jsonwebtoken");

export const middleware = async (req) => {
  const secret = process.env.SECRET;
  const cookieName = process.env.COOKIE_NAME;
  const url = req.url;
  const cookieToken = req.cookies.get(cookieName);
  // const verifiedToken = await jwt.verify(cookieToken, secret);

  if (url.includes("/admin") || url.includes("/api/v1/admin")) {
    if (cookieToken === undefined) {
      // if (!verifiedToken) {
      //   // if this an API request, respond with JSON
      //   return new NextResponse(
      //     JSON.stringify({ error: { message: "authentication required" } }),
      //     { status: 401 }
      //   );
      // }

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

  if (url.includes("/login") || url.includes("/recovery")) {
    if (cookieToken !== undefined) {
      try {
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
