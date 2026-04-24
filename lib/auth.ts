import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://app.useaudora.com",
  secret: process.env.BETTER_AUTH_SECRET,
});
