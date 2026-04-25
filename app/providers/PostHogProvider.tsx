'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';
import { useEffect, ReactNode } from 'react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    ui_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    capture_pageview: false // Disable automatic pageview capture, as we capture manually
  });
}

export function PostHogProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Optional: any client-side setup for posthog provider could go here.
    // Posthog is already initialized above.
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
