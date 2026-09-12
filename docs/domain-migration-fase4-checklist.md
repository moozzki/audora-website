# Checklist Fase 4 — Kode Landing (`D:\audora-web`)

**Referensi:** `D:\3d-icon-generator\doc\domain-migration-zupericon.md` — Fase 4
**Tujuan:** Pindah domain landing ke `zupericon.com`, putus session check ke app (decoupling penuh), arahkan semua CTA ke `app.zupericon.com`, dan canonical/sitemap mengarah ke `zupericon.com`. Brand tetap "Audora" sampai Part B.
**Status:** Kode selesai (12 September 2026) — `cdn.zupericon.com` **aktif & aset terverifikasi 200**; Fase 2 (Vercel: domain + env) **selesai** — deploy kode Fase 4 menyusul di Fase 6

---

## A. Decoupling Landing dari App

- [x] `lib/auth.ts` — **file dihapus** (dead code, tidak diimport siapa pun)
- [x] `lib/auth-client.ts` — **file dihapus** (hanya dipakai navbar)
- [x] `components/landing/user-profile-dropdown.tsx` — **file dihapus**
- [x] `components/landing/navbar.tsx` — hapus import `authClient` + `UserProfileDropdown` + `authClient.useSession()`
- [x] `components/landing/navbar.tsx` — `redirectToSignIn` → `https://app.zupericon.com/sign-in` (dev tetap `http://localhost:3000/sign-in`)
- [x] `components/landing/navbar.tsx` — tombol "Sign In" desktop **selalu tampil** (tanpa session check)
- [x] `components/landing/navbar.tsx` — hapus cabang session mobile; tombol "Sign In to Dashboard" **selalu tampil**
- [x] `next.config.ts` — hapus rewrite `/api/auth/:path*` → `localhost:3000` (dead code, bagian decoupling penuh)

## B. Domain, Metadata & Canonical

- [x] `next.config.ts` — `images.remotePatterns` tambah `cdn.zupericon.com` (Fase 8: `cdn.useaudora.com` dihapus — semua aset/DB pindah ke CDN baru)
- [x] `app/layout.tsx` — `openGraph.url` → `https://zupericon.com`
- [x] `app/layout.tsx` — OG/Twitter image → `cdn.zupericon.com`
- [x] `app/layout.tsx` — `metadataBase` → `NEXT_PUBLIC_SITE_URL` (fallback `https://zupericon.com`)
- [x] `app/page.tsx` — canonical `/`
- [x] `app/about/page.tsx` — canonical `/about`
- [x] `app/pricing/page.tsx` — metadata `url` → `zupericon.com/pricing`, OG image → CDN baru, canonical `/pricing`
- [x] `app/blog/page.tsx` — metadata `url` → `zupericon.com/blog`, canonical `/blog`
- [x] `app/blog/[slug]/page.tsx` — `currentUrl` + canonical → `zupericon.com/blog/<slug>`
- [x] `app/privacy-policy/page.tsx` — canonical `/privacy-policy`
- [x] `app/refund-policy/page.tsx` — canonical `/refund-policy`
- [x] `app/terms-of-service/page.tsx` — canonical `/terms-of-service`
- [x] `app/robots.ts` — sitemap → `https://zupericon.com/sitemap.xml`
- [x] `app/sitemap.ts` — semua entry → `https://zupericon.com`
- [x] `app/privacy-policy/page.tsx` — email → `support@zupericon.com`
- [x] `app/refund-policy/page.tsx` — email → `support@zupericon.com`
- [x] `app/terms-of-service/page.tsx` — email → `support@zupericon.com`
- [x] `sanity.config.ts` — fallback `resolveProductionUrl` → `https://zupericon.com` (env `NEXT_PUBLIC_SITE_URL` tetap prioritas)

## C. CTA & Checkout ke App Baru

- [x] `components/landing/cta-primary.tsx` — Sign In → `https://app.zupericon.com/sign-in`
- [x] `components/landing/hero-primary.tsx` — Sign In → `https://app.zupericon.com/sign-in`
- [x] `components/landing/pricing-idr.tsx` — Checkout → `https://app.zupericon.com/checkout`
- [x] `components/landing/pricing-usd.tsx` — Checkout → `https://app.zupericon.com/checkout`

## D. Aset CDN Landing → `cdn.zupericon.com`

- [x] Fase 1 selesai — `cdn.zupericon.com` (R2 custom domain, bucket `audora-icon-storage`) **aktif** (12 September 2026)
- [x] `components/landing/about-content.tsx` — 2 aset founder
- [x] `components/landing/carousel-icon.tsx` — 10 ikon
- [x] `components/landing/interactive-demo.tsx` — 4 aset demo
- [x] `components/landing/personas.tsx` — 4 aset persona
- [x] `components/landing/pricing-idr.tsx` — 3 ikon paket
- [x] `components/landing/pricing-usd.tsx` — 3 ikon paket
- [x] `app/layout.tsx`, `app/pricing/page.tsx` — OG image

## E. Tidak Berubah di Fase Ini (tetap sampai Part B)

- [x] Semua teks brand "Audora" (navbar, hero, footer, blog, legal, metadata title) — diganti di Part B
- [x] `components/landing/footer.tsx` — link sosial media (`instagram.com/useaudora`, `threads.com/@useaudora`) + copyright — Part B
- [x] `public/assets/logos/audora-square-logo.png` — logo lama — Part B
- [x] Waitlist, testimonials, Sanity, Turnstile — tidak ada perubahan logika (hostname Turnstile/Sanity ditambah di Fase 1/5 lewat dashboard)
- [x] `lib/db.ts`, `app/actions/waitlist.ts`, `app/api/testimonials/route.ts` — tetap (akses Neon langsung)
- [x] Domain `useaudora.com` tetap dilayani (tanpa redirect); canonical menunjuk ke `zupericon.com`

## F. Env Production (Landing Project — Vercel)

- [x] `NEXT_PUBLIC_SITE_URL=https://zupericon.com`
- [x] Add production domain `zupericon.com` + `www.zupericon.com` (pertahankan `useaudora.com` + `www`)
- [x] Env production tersimpan di Vercel — berlaku pada build berikutnya (`NEXT_PUBLIC_*` bersifat build-time)
- [x] Verifikasi domain live (12 September 2026): `zupericon.com` 200, `www.zupericon.com` 308 permanent redirect ke apex, `app.zupericon.com` 200
- [ ] **Deploy kode Fase 4 (landing)** — saat ini `zupericon.com` masih menyajikan build lama (tanpa canonical, aset `cdn.useaudora.com`); kode baru akan live setelah deploy di Fase 6

## G. Verifikasi

- [x] `npx tsc --noEmit` — lolos tanpa error
- [x] `npm run lint` — 0 error (17 warning `<img>` pre-existing, di luar scope)
- [x] `npm run build` — sukses (Next.js 16.2.1, semua route ter-generate)
- [x] Output HTML statis: canonical `https://zupericon.com`, `https://zupericon.com/about`, `https://zupericon.com/blog`; tidak ada referensi `useaudora.com` di halaman
- [x] `robots.txt` → `Sitemap: https://zupericon.com/sitemap.xml`
- [x] `sitemap.xml` → semua URL `zupericon.com`
- [x] `cdn.zupericon.com` live — sampel aset landing 200: `dandy-indah.webp`, `starter-package-icon.png`, `og-homepage.jpg`, `ridwan-founder-audora.png`
- [ ] Smoke test di Fase 6 (bukan scope Fase 4): landing di `zupericon.com` **dan** `useaudora.com` sama-sama normal, tombol Sign In selalu tampil, tidak ada request session check

---

## Catatan Implementasi

1. **Rewrite `/api/auth` dihapus**: `next.config.ts` punya rewrite dev `/api/auth/:path*` → `http://localhost:3000` untuk proxy session. Setelah `authClient` dihapus, rewrite ini dead code dan ikut dihapus sebagai bagian decoupling penuh (plan hanya menyebut penghapusan blok CORS di app, tapi tujuan Fase 4 "putus session check ke app" mencakup ini).
2. **Canonical ditambahkan (baru)**: plan Fase 4 catatan + smoke test Fase 6 mewajibkan canonical mengarah ke `zupericon.com` saat halaman diakses dari `useaudora.com`. Sebelumnya landing tidak punya tag canonical sama sekali. Implementasi: `metadataBase` di root layout + `alternates.canonical` per halaman (home, about, pricing, blog, blog detail, 3 legal page). Halaman dinamis (pricing legal blog detail) memakai canonical path statis relatif terhadap `metadataBase`.
3. **`app/page.tsx` diubah dari client component → server component**: diperlukan agar bisa mengekspor `metadata` (canonical `/`). Tidak ada perubahan perilaku — semua child component tetap client component.
4. **`sanity.config.ts`**: fallback URL production diubah ke `https://zupericon.com`; nilai `NEXT_PUBLIC_SITE_URL` (di-set Fase 2) tetap dipakai lebih dulu.
5. **`better-auth` masih ada di `package.json`** meski tidak lagi diimport di landing. Tidak dihapus agar scope Fase 4 tetap sesuai plan; bisa dibersihkan kapan saja.
6. **`cdn.useaudora.com` dihapus** dari `images.remotePatterns` di Fase 8 — semua aset landing & URL DB sudah pindah ke `cdn.zupericon.com` (CDN baru aktif sejak 12 September 2026, Fase 1 selesai).
7. **Urutan deploy**: dependency CDN **sudah beres** — `cdn.zupericon.com` aktif dan aset landing terverifikasi 200. Fase 2 (domain + env Vercel) juga **sudah selesai**, jadi deploy kode landing tinggal menunggu Fase 6. Saat ini `zupericon.com` (200) masih menyajikan build lama — canonical/aset baru akan muncul setelah deploy.
8. **Landing di `useaudora.com` tanpa redirect**: kedua domain melayani konten yang sama; canonical + sitemap mengarah ke `zupericon.com`. Redirect 301 baru dipasang di Fase 8.
