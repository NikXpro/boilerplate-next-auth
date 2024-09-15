import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { Session, User } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GithubProvider],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      // Ajout des types
      if (session.user && user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
});
