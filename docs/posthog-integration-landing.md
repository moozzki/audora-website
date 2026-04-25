

### 📄 PRD 1: Copy-Paste ke AI Agent LANDING PAGE (`useaudora.com`)

> "We need to integrate PostHog for analytics and session replay in our Next.js 15+ App Router application (Landing Page).
> 
> **Action Required:**
> 1. Install PostHog: Run `npm install posthog-js`
> 2. Create a PostHog Provider: Create `app/providers/PostHogProvider.tsx`.
>    - Initialize `posthog` outside the component using environment variables `process.env.NEXT_PUBLIC_POSTHOG_KEY` and `process.env.NEXT_PUBLIC_POSTHOG_HOST`.
>    - Ensure initialization only happens on the client side (`typeof window !== 'undefined'`).
>    - Return the `<PostHogProvider client={posthog}>{children}</PostHogProvider>`.
> 3. Create a PageView Tracker: Inside the same file (or a new client component `PostHogPageView.tsx`), use the `usePathname` and `useSearchParams` hooks from `next/navigation` to trigger `posthog.capture('$pageview')` whenever the route changes.
> 4. Wrap the App: Open `app/layout.tsx`. Import your new Provider and wrap the `{children}` inside the `<body>` with it. Make sure the PageView tracker is also included inside the layout or provider.
> 5. Do not add `posthog.identify` here, as this is the public landing page for anonymous traffic."


