import { NextResponse } from "next/server";

import { NextRequest } from "next/server";
import { routes } from "./constants/routes";
import { COOKIE_TEMPLATE } from "./constants";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(COOKIE_TEMPLATE.accessToken);
  const hasAccessToken = accessToken?.value;

  if (!pathname.startsWith("/auth") && !hasAccessToken) {
    return NextResponse.redirect(new URL(routes.login, request.url));
  }

  if (pathname.startsWith("/auth")) {
    if (hasAccessToken) {
      return NextResponse.redirect(
        new URL(routes.home, request.nextUrl.origin),
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public|image).*)"],
};
