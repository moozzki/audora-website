# Implementation Plan: Auth-Aware Navbar CTA

**Date:** 2026-04-23
**Status:** ✅ Completed — 2026-04-23

---

## Overview

Replace the "Join Beta" CTA button in the landing page navbar with a conditional auth-aware button:
- **Not signed in:** "Sign In" button → redirects to `https://app.useaudora.com/sign-in`
- **Signed in:** User profile dropdown → Dashboard & Sign Out options

---

## Step 1: Update Database Schema

**File:** `lib/schema.ts`

Replace entire content with schema from `docs/schema-back.md`:

### Enums to Add
```typescript
positionEnum, styleEnum, qualityEnum, statusEnum, aiModelEnum
```

### Tables to Add
```typescript
user, session, account, verification, userCredits, generations, transactions, waitlist, feedbacks
```

### Types to Export
```typescript
User, NewUser, Feedback, NewFeedback
```

---

## Step 2: Install Dependencies

```bash
pnpm add better-auth
pnpm dlx shadcn@latest add dropdown-menu
```

---

## Step 3: Create Auth Configuration

**File:** `lib/auth.ts`

```typescript
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db";

export const auth = betterAuth({
  database: drizzleAdapter(db),
  baseURL: "https://app.useaudora.com",
  secret: process.env.BETTER_AUTH_SECRET,
});

export const { signIn, signOut, getSession } = auth;
```

---

## Step 4: Create User Profile Dropdown Component

**File:** `components/landing/user-profile-dropdown.tsx`

### Structure
```
CDropdownMenu
├── CDropdownMenuTrigger → User avatar button
└── CDropdownMenuContent
    ├── CDropdownMenuItem "Dashboard" → links to https://app.useaudora.com/
    └── CDropdownMenuItem "Sign Out" → calls signOut(), redirects to /
```

### Props Interface
```typescript
interface UserProfileDropdownProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}
```

### Features
- Circular avatar (32px) with user image or fallback initials
- Dashboard item with `LayoutDashboard` icon
- Sign Out item with `LogOut` icon
- Uses shadcn `DropdownMenu` component

---

## Step 5: Update Navbar Component

**File:** `components/landing/navbar.tsx`

### Imports to Add
```typescript
import { getSession } from "@/lib/auth";
import { UserProfileDropdown } from "./user-profile-dropdown";
```

### Desktop CTA (lines ~51-62)
```typescript
<div className="hidden md:flex items-center gap-4">
  <ModeToggle />
  {session ? (
    <UserProfileDropdown user={session.user} />
  ) : (
    <button
      onClick={() => redirectToSignIn()}
      className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold scale-95 active:scale-90 transition-all duration-200 shadow-md shadow-primary/20"
    >
      Sign In
    </button>
  )}
</div>
```

### Mobile CTA (lines ~97-106)
Same conditional logic for mobile menu.

### Sign In Redirect Function
```typescript
const redirectToSignIn = () => {
  window.location.href = "https://app.useaudora.com/sign-in";
};
```

---

## Step 6: Type Exports

**File:** `lib/schema.ts`

Add at bottom:
```typescript
export type User = typeof user.$inferSelect;
export type NewUser = typeof user.$inferInsert;
```

---

## Files Summary

| File | Action | Description |
|------|--------|-------------|
| `lib/schema.ts` | Replace | Full schema from schema-back.md |
| `lib/auth.ts` | Create | better-auth configuration |
| `components/landing/user-profile-dropdown.tsx` | Create | User dropdown menu component |
| `components/landing/navbar.tsx` | Update | Conditional auth-aware CTA |

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `better-auth` | Authentication |
| `@radix-ui/react-dropdown-menu` | Dropdown menu (via shadcn) |

---

## Notes

- better-auth is already configured at `app.useaudora.com`
- Dashboard URL: `https://app.useaudora.com/`
- User profile shows `name` and `image` from `user` table
- Sign In button uses same styling as "Join Beta" (primary filled with shadow)