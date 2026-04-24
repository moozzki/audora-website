
---

### 📄 PRD 1: COPY UNTUK AI AGENT (REPO: LANDING PAGE - useaudora.com)

**Subject:** Implementasi Geo-Pricing UI di Landing Page

**1. Latar Belakang & Objektif**
Halaman `/pricing` saat ini menampilkan harga dalam dua mata uang sekaligus (IDR dan USD), yang dapat menurunkan tingkat konversi. Objektif task ini adalah mengimplementasikan *Geo-Location detection* menggunakan fitur bawaan Vercel Edge Network agar pengunjung dari Indonesia hanya melihat harga IDR, dan pengunjung internasional hanya melihat harga USD.

**2. Spesifikasi Teknis (Next.js App Router)**
* Ubah file `app/pricing/page.tsx` menjadi *Server Component*.
* Gunakan `headers().get('x-vercel-ip-country')` dari `next/headers` untuk mendeteksi asal negara.
* Buat logika *conditional rendering*:
    * Jika `country === 'ID'`, render komponen `<PricingIDR />`.
    * Jika `country !== 'ID'`, render komponen `<PricingUSD />`.
    *(Catatan: Berikan fallback ke 'ID' jika header null saat di localhost, agar saya bisa melihat komponen PricingIDR saat development).*

**3. Spesifikasi Komponen & Routing (PENTING)**
Buat/pisahkan komponen UI harga dengan spesifikasi berikut:
* **PricingIDR:**
    * Starter: Rp 30.000 (10 Credits) -> ID Paket: `starter_idr`
    * Creator: Rp 75.000 (30 Credits) -> ID Paket: `creator_idr`
    * Studio: Rp 150.000 (75 Credits) -> ID Paket: `studio_idr`
* **PricingUSD:**
    * Starter: $5.00 (25 Credits) -> ID Paket: `starter_usd`
    * Creator: $10.00 (60 Credits) -> ID Paket: `creator_usd`
    * Studio: $25.00 (175 Credits) -> ID Paket: `studio_usd`

**4. Action Tombol Beli (CTA)**
Karena aplikasi utama dan *payment gateway* berada di domain yang berbeda, **jangan lakukan pemrosesan API payment di sini**. 
Semua tombol "Buy / Beli" harus berupa link eksternal yang mengarah ke aplikasi utama dengan membawa parameter ID paket.
* **Format Link:** `https://app.useaudora.com/checkout?package=[ID_Paket]`
* *Contoh:* Tombol beli di paket Starter IDR mengarah ke `https://app.useaudora.com/checkout?package=starter_idr`.

Silakan eksekusi perubahan UI dan *routing* ini.

---
