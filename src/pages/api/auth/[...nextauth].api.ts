import { PrismaAdapter } from '@/src/lib/auth/prisma-adapter';
// import { PrismaAdapter } from '@auth/prisma-adapter';
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider, { GoogleProfile } from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';

export function buildNextAuthOptions(): NextAuthOptions {
  return {
    adapter: PrismaAdapter(),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        authorization: {
          params: {
            prompt: 'consent',
            access_type: 'offline',
            response_type: 'code',
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            avatar_url: profile.picture,
          };
        },
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_CLIENT_ID ?? '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
      }),
    ],
    callbacks: {
      async redirect({ url, baseUrl }) {
        if (url.startsWith('/')) return `${baseUrl}${url}`;

        if (new URL(url).origin === baseUrl) return url;
        return baseUrl;
      },

      async session({ session, user }) {
        return {
          ...session,
          user,
        };
      },
    },
  };
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions());
}
