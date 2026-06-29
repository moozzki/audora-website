import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  // Landing page's own URL — used by the /api/auth routes on this server
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://useaudora.com",
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET,
  // Must match the app's crossSubDomainCookies config
  // so this server can read/clear session cookies set by app.useaudora.com
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: process.env.NODE_ENV === "production" ? ".useaudora.com" : undefined,
    },
  },
});
