import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import type { NextAuthOptions } from "next-auth"
export const authOptions : NextAuthOptions= {
  // Configure one or more authentication providers
 
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_KEY as string,
    }),
    // ...add more providers here
   
  ],
  secret:process.env.NEXT_PUBLIC_JWT_SECRET as string
}
export default NextAuth(authOptions)
