import { NextResponse } from "next/server";
import { config } from "../config/config";
import ProtectedLinks from "./helpers/ProtectedLinks";

export const middleware = async (req) => {
  const url = req.nextUrl.clone();
  
  if (ProtectedLinks().find((el) => url.pathname.includes(el))) {
    NextResponse.redirect(new URL("/home/wepa", url.origin));
  }
  NextResponse.next();
};
