import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  // if (request.nextUrl.pathname.startsWith("/about")) {
  //   return NextResponse.rewrite(new URL("/about-2", request.url));
  // }

  // if (request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  // }
  
  return NextResponse.next();
}
