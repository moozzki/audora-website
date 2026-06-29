import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3001" : "https://app.useaudora.com",
  fetchOptions: {
    credentials: "include", // Required for cross-origin session sharing
  },
});

export type Session = typeof authClient.$Infer.Session;
