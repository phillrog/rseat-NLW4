import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client';

export default (req, res) => NextAuth(req, res,
  {
    // Configure one or more authentication providers
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
    ],

    // A database is optional, but required to persist accounts in a database
    database: process.env.DATABASE_URL,
    theme: "dark",
    jwt: {
      secret: process.env.JWT_JWT_SECRET
    }
  })