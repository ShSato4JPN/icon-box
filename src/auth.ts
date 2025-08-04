import NextAuth from "next-auth";

import authConfig from "./auth.config";
import { env } from "./env";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: "icon-box-session-token",
      options: {
        httpOnly: true,
        secure: env.NEXT_PUBLIC_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      },
    },
  },
  ...authConfig,
});
