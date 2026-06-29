import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://useaudora.com",
  basePath: "/api/auth",
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins: [
    "https://*.useaudora.com",
    "https://useaudora.com",
    "http://localhost:3001",
    "http://localhost:3000",
  ],
  // Must match the app's crossSubDomainCookies config
  // so the landing page can read/invalidate session cookies set by app.useaudora.com
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: process.env.NODE_ENV === "production" ? ".useaudora.com" : undefined,
    },
  },
});
