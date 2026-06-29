import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // Same-origin: the landing page now serves its own /api/auth routes
  // No more cross-origin requests to app.useaudora.com
  fetchOptions: {
    credentials: "include", // Required for cross-subdomain cookie sharing
  },
});

export type Session = typeof authClient.$Infer.Session;
