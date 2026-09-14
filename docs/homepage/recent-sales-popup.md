# Recent Sales Popup Plan

## Goal

Add a subtle social-proof popup to the landing page that shows recent paid
transactions when available and fills the feed with clearly synthetic demo
activity when the production transaction volume is still low.

The popup must feel like a lightweight activity notification, not a blocking
modal. Synthetic entries must not be inserted into the `transactions` table or
counted as real revenue.

## Data Source

- Add `GET /api/transactions/recent`.
- Query `transactions` where `payment_status = 'paid'`.
- Sort by `created_at DESC` and limit the real result set.
- Return only safe display fields: anonymous label, package name, credits,
  timestamp, and whether the item is demo activity.
- Never return `userId`, email, payment provider references, or other private
  identifiers.
- Merge deterministic demo entries only when fewer than the display limit of
  real transactions are available.
- Keep demo entries in the API response only; do not write them to the
  database.

## Package Mapping

Use `creditAmount` to map transaction activity to the existing packages:

- 10 credits: Starter
- 30 credits: Creator
- 75 credits: Studio
- Other amounts: `<credits> credits`

The popup prioritizes package and credit information to keep the notification
compact and avoid exposing unnecessary payment details.

## UX and Animation

- Mount the component from `LandingLayout` so it is available on the landing
  page without affecting document flow.
- Use a fixed bottom-left card on desktop and a bottom-centered card on mobile.
- Wait 8-12 seconds before the first notification.
- Show at most 3 notifications per browser session.
- Auto-dismiss each notification after 6-8 seconds.
- Add a 25-40 second cooldown between notifications.
- Stop the dismissal timer while the pointer is over the card.
- Persist a session dismissal with `sessionStorage` when the visitor closes it.
- Respect `prefers-reduced-motion` by using a fade-only transition.
- Use `aria-live="polite"` and a real close button.
- Do not show the popup on auth, checkout, or internal application pages.

## Display Copy

- Real entry: `Recent purchase`
- Demo entry: `Popular choice`
- Anonymous identities: `A creator`, `A designer`, or `Someone from the
  community`
- Example body: `A creator picked Creator - 30 credits`

The copy must not expose private customer identity or imply that demo activity
is a real paid transaction.

## Verification

- Verify only paid transactions are returned.
- Verify pending, cancelled, and expired transactions are excluded.
- Verify the API returns demo activity when the real result set is empty.
- Verify no private transaction fields are sent to the browser.
- Verify first-delay, cooldown, auto-dismiss, close, hover pause, mobile, and
  reduced-motion behavior.
- Run `npm run lint` and `npx tsc --noEmit`.
