import "next-auth";
import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    username?: string;
    email?: string;
    image?: string;
    name?: string;
    _id?: string;
    role: string;
    id?: string;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username?: string;
    email?: string;
    image?: string;
    name?: string;
    _id?: string;
    role: string;
    id?: string;
  }
}
