import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { existsEmails } from "./signup";
import { verifyPassword } from "../../../lib/auth";

export default NextAuth({
  session: { jwt: true },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await existsEmails(credentials.email);
        console.log("user", user);
        if (!user) {
          throw new Error("No user found!");
        }
        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          throw new Error("Could not log you in!");
        }
        return {
          email: user.email,
        };
      },
    }),
  ],
});
