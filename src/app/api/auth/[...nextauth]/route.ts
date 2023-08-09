import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLEOAUTH_SECRET || "",
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin",
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
