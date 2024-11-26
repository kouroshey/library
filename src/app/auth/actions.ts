"use server";

import { COOKIE_TEMPLATE } from "@/constants";
import { removeCookie, setCookie } from "@/lib/helpers/cookie";
import { LoginParams } from "./_components/LoginForm";
import { user } from "@/constants/users";
import { routes } from "@/constants/routes";
import { redirect } from "next/navigation";

export async function verifyLoginAction(
  params: LoginParams,
): Promise<{ error?: string }> {
  try {
    if (params.email === user.email && params.password === user.password) {
      removeCookie(COOKIE_TEMPLATE.accessToken);
      setCookie(COOKIE_TEMPLATE.accessToken, "access_token", {
        maxAge: 900000000000000,
      });
      redirect(routes.home);
    } else {
      return { error: "Invalid email or password" };
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_) {
    return { error: "An unexpected error occurred" };
  }
}
