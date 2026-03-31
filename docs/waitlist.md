
---

# 📄 PRD: Audora Early Access Waitlist

## 1. Ringkasan Fitur (Overview)
Implementasi sistem pendaftaran *early access* menggunakan komponen **Modal Dialog** (Popup) yang dipicu oleh tombol CTA (*Call to Action*) di *landing page* Audora. Fitur ini menangkap email *user*, melakukan verifikasi keamanan, dan menyimpannya ke database.

## 2. Tujuan (Goals)
* **Minimalis UI:** Menjaga *landing page* tetap ringkas tanpa form yang memenuhi layar.
* **Konversi Tinggi:** Memberikan interaksi yang fokus saat *user* sudah berniat untuk mendaftar.
* **Security:** Mencegah *spam* bot menggunakan Cloudflare Turnstile secara *invisible*.

## 3. Tech Stack & UI Components
* **Framework:** Next.js (App Router).
* **Database & ORM:** Neon DB (Postgres) + Drizzle ORM.
* **Validation:** Zod.
* **Anti-Spam:** Cloudflare Turnstile.
* **UI Components:** **Shadcn/UI** (Dialog/Modal), **Radix UI**, atau **Headless UI** (untuk aksesibilitas dan performa yang ringan).

## 4. Alur Pengguna (User Flow)
1.  *User* klik tombol **"Join Beta"** di *landing page*.
2.  **Modal Dialog** muncul dengan animasi *fade-in/scale-up*.
3.  Modal berisi:
    * Judul: "Get an Early Access"
    * Deskripsi singkat keuntungan early access.
    * Input field email.
    * **Cloudflare Turnstile** (berjalan otomatis di balik layar).
    * Tombol "Join Beta".
4.  *User* memasukkan email dan klik "Join Beta".
5.  State tombol berubah menjadi *loading/disabled*.
6.  **Success State:** Isi modal berganti menjadi pesan sukses (misal: ikon centang + *"You're on the list!"*).
7.  *User* menutup modal secara manual atau otomatis tertutup setelah 3 detik sukses.

## 5. Kebutuhan Teknis (Technical Requirements)

### A. UI/UX: Modal Dialog
* **Trigger:** Tombol utama di *hero section* dan *navbar header*.
* **Overlay:** Latar belakang di belakang modal harus gelap transparan (*backdrop-blur*) untuk menjaga fokus.
* **Responsiveness:** Modal harus tampil penuh (*full-width*) di perangkat *mobile* dengan *padding* yang pas.

### B. Database Schema (Drizzle)
Sesuai skema sebelumnya, tetap di database yang sama dengan backend Audora:
```typescript
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  status: varchar("status", { length: 50 }).default("pending"), // untuk tracking kedepannya
  joinedAt: timestamp("joined_at").defaultNow().notNull(),
});
```

### C. Backend Logic (Server Action)
Fungsi di sisi server harus melakukan:
1.  Ekstrak `email` dan `turnstileToken`.
2.  Verifikasi `turnstileToken` ke endpoint Cloudflare.
3.  Validasi format email via **Zod**.
4.  Cek apakah email sudah terdaftar (cegah *duplicate error*).
5.  *Insert* ke Neon DB menggunakan *connection pooling* URL.

## 6. Keamanan (Anti-Spam & Validation)
* **Cloudflare Turnstile:** Masukkan widget Turnstile di dalam form modal. Gunakan tipe `invisible` agar tidak merusak desain, atau `managed` jika ingin memberikan rasa aman ke *user*.
* **Zod Schema:**
    ```typescript
    const WaitlistSchema = z.object({
      email: z.string().email("Format email salah, Ky."),
      token: z.string().min(1, "Verifikasi keamanan gagal."),
    });
    ```

## 8. Kriteria Sukses
* Modal terbuka < 100ms setelah diklik.
* Tidak ada email sampah/bot yang masuk ke tabel `waitlist` di Neon.
* Email berhasil ter-simpan dan bisa di-*query* dengan benar lewat Drizzle.

---