import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://app.useaudora.com",
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [
    "https://*.useaudora.com", // allow all subdomains (landing page, app, etc.)
    "https://useaudora.com",   // allow apex domain
    "http://localhost:3001",   // landing page dev server
    "http://localhost:3000",   // app dev server
  ],
});
