import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";

// Minimal auth instance for the landing page.
// Used only for DB-backed features (e.g. feedback) — NOT for sign-in/sign-out.
// Authentication is handled by app.useaudora.com; we share the same DB + secret.
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://useaudora.com",
  secret: process.env.BETTER_AUTH_SECRET,
});
