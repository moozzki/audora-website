# Audora — Changelog & Product Roadmap

Dokumen ini berisi catatan perubahan (Changelog) historis dari platform Audora (baik untuk Developer maupun untuk End-User) serta rencana pengembangan fitur ke depan (Product Roadmap).

---

## 🚀 Product Roadmap (Coming Soon)

Berikut adalah beberapa fitur utama yang direncanakan untuk masuk ke pipeline pengembangan Audora:

### 1. V2 Core: Animated 3D Icons (Motion Studio) 🎬
Fitur premium untuk menghidupkan ikon 3D statis hasil generate menjadi video animasi *looping* pendek berdurasi 4 detik.
* **Model AI:** Menggunakan `fal-ai/veo3.1/lite/image-to-video` untuk proses render berkecepatan tinggi dengan biaya kredit efisien.
* **Background Removal Integration:** Integrasi otomatis dengan `fal-ai/birefnet/v2` untuk membersihkan background menjadi PNG transparan sebelum dikomposisikan ke video.
* **Canvas Customization:** Pilihan resolusi (720p/1080p), aspek rasio (16:9 / 9:16), serta opsi warna background Hex atau Chroma Green (untuk transparent masking di video editor).
* **Closed Ecosystem:** Hanya menerima input dari database internal Audora untuk menjamin kualitas output.

### 2. Figma & Canva Plugin Integration 🔌
Integrasi langsung untuk mempercepat workflow desainer UI/UX.
* Memungkinkan desainer mencari, memilih, dan men-generate ikon 3D langsung dari dalam Figma canvas tanpa perlu membuka web dashboard Audora.
* Sinkronisasi folder/koleksi personal secara *real-time*.

### 3. AI-Powered SVG Vectorizer 📐
Menjembatani visual 3D render yang berbasis raster (PNG) dengan kebutuhan performa web modern.
* Proses konversi otomatis dari 3D shading raster menjadi file SVG (vector paths) yang scalable, bersih, dan berukuran kecil.
* Mendukung ekspor format WebP dinamis.

### 4. 3D Mesh & Model Exporter (GLTF/OBJ) 🧊
Meningkatkan kapabilitas platform dari generator gambar 3D statis menjadi generator aset 3D yang sebenarnya.
* Menghasilkan file mesh 3D berformat `.gltf` atau `.obj` yang dapat di-import langsung ke software 3D seperti Blender atau Three.js di website.

### 5. Smart Brand Recoloring Engine 🎨
Mencocokkan warna ikon 3D hasil generate secara instan dengan brand guide pengguna.
* Pengguna cukup mengunggah kode HEX palette warna brand mereka, dan AI akan menyesuaikan warna shading, pencahayaan, dan material ikon agar konsisten dengan warna identitas brand.

### 6. Localized Editing (Refinement Brush / Inpainting) 🖌️
Kontrol edit yang lebih presisi tanpa harus men-generate ulang seluruh bagian gambar.
* Pengguna dapat "mengarsir" (brushing) area tertentu pada ikon (misal: tombol pada ikon kalkulator) dan memasukkan prompt baru khusus untuk area tersebut (misal: *"change button color to metallic gold"*).

### 7. Lottie & WebP/APNG Export Optimization 🏃‍♂️
Ekspor video animasi mikro langsung ke format animasi web yang super ringan.
* Konversi dari video MP4 4 detik ke format JSON (Lottie), APNG, atau WebP animasi untuk menjamin page-load speed web tetap optimal.

---

## 👥 Changelog (User-Facing / Product Updates)

Berikut adalah catatan rilis yang difokuskan pada penambahan fitur baru, peningkatan pengalaman pengguna (UX), serta pembaruan antarmuka platform Audora:

### [v1.4.0] — Aplikasi PWA Handal & Folder Anti-Bentrok
* **Aplikasi Mobile (PWA) Super Stabil:** Kamu sekarang bisa menginstal Audora di HP Android (Chrome/Brave) dan iOS (Safari) tanpa kendala *install hang* / macet. Tampilan title bar aplikasi juga jauh lebih bersih dan rapi!
* **Pembuatan Folder Pintar:** Tidak perlu khawatir nama folder koleksimu bertabrakan. Jika kamu membuat folder dengan nama yang sama, sistem akan otomatis menambahkan angka `(1)`, `(2)`, dst.
* **Akses Menu Melayang Sidebar:** Saat kamu menyembunyikan/mengecilkan sidebar utama, kamu tetap bisa menjelajahi folder koleksi kamu lewat menu popover melayang yang praktis.
* **Reset Refine Mode Bersih:** Tombol hapus gambar referensi di mode edit (Refine) kini bekerja secara instan dan mengembalikan workspace kamu ke dashboard utama tanpa gangguan error visual.

### [v1.3.0] — Pengelompokan Folder Koleksi & Tampilan Detail Baru
* **Sistem Folder Koleksi:** Sekarang kamu bisa membuat folder khusus di galeri pribadimu untuk mengelompokkan ikon-ikon hasil generasi agar lebih rapi.
* **Kotak Dialog Detail Gambar:** Desain baru untuk panel popup saat kamu mengklik gambar ikon. Informasi prompt, tombol download, dan menu edit diletakkan dalam susunan yang lebih nyaman dilihat.
* **Tombol Cepat "Home":** Menambahkan menu "Home" pada dropdown profil akun di sudut kanan atas untuk memudahkanmu kembali ke situs utama Audora.

### [v1.2.0] — Galeri Gaya Visual, Zoom Canvas & Pemotong Gambar
* **Pemilih Gaya Visual (Style grid Popover):** Memilih gaya ikon 3D kini lebih menyenangkan! Cukup klik menu style untuk membuka katalog visual gaya gambar yang langsung bisa kamu pilih.
* **Inspirasi Prompt (Pro Tips):** Bingung mau menulis deskripsi apa? Sekarang ada tombol saran ide prompt pro di kolom input untuk membantumu membuat ikon 3D terbaik.
* **Alat Pemotong Gambar (Crop Tool):** Saat mengunggah gambar referensi, kamu bisa memotong (*crop*) bagian gambar yang kamu inginkan langsung di dalam Audora sebelum men-generate ikon.
* **Zoom & Geser Canvas:** Workspace studio kini mendukung fitur perbesar (*zoom*) dan geser (*pan*) gambar hasil generasi agar kamu bisa meneliti detail ikon lebih dekat.
* **Bundel Ekspor Ikon Aplikasi (Developer Size Exporter):** Download ikon generasimu sekaligus dalam format zip berisi kumpulan ukuran lengkap untuk developer Android, iOS, maupun web (termasuk favicon).

### [v1.1.0] — Edit Ulang Ikon (Refine Mode) & Garansi Kredit Gagal
* **Refine Mode & Gambar Referensi:** Fitur untuk mengedit ulang ikon yang sudah kamu buat dengan menambahkan deskripsi baru, atau mengunggah coretan/sketsa kasar sebagai panduan bentuk visual untuk AI.
* **Garansi Kredit Gagal (Auto-Refund):** Jika pembuatan ikon gagal karena masalah koneksi atau error AI, kredit saldomu akan dikembalikan secara otomatis pada detik itu juga!
* **Daftar Harga & Riwayat Transaksi:** Menampilkan informasi harga paket kredit langsung di dalam dashboard aplikasi untuk mempermudah top-up saldo.

### [v1.0.0] — Perilisan Perdana Audora Studio (MVP Launch)
* **Ketik Jadi Ikon 3D:** Ubah kata-kata / deskripsi teks menjadi ikon 3D berkualitas tinggi dengan cepat.
* **7 Pilihan Sudut Pandang Kamera:** Atur posisi hadap ikon kamu dari 7 pilihan sudut kamera: Isometric, Front Facing, Back Facing, Side Facing, Three Quarter, Top Down, dan Dimetric.
* **Pilihan Kualitas Super:** Generate ikonmu dalam resolusi 2K (tajam) atau 4K (sangat tajam).
* **Galeri Library Pribadi:** Menyimpan semua ikon hasil kreasimu di satu tempat agar mudah dicari kembali kapan saja.

---

## 📅 Changelog (Developer & Technical Updates)

Catatan teknis internal pengembangan sistem, perbaikan codebase, konfigurasi server, dan perubahan database:

### [v1.4.0] — PWA Native Experience & Navigation Refinements
* **PWA & WebAPK Compliance:**
  * Menyelesaikan isu instalasi PWA di Android (Chrome/Brave) dengan konsolidasi manifest icons dan filtering request pada service worker fetch handler.
  * Mengatur `start_url` ke `/sign-in` untuk validasi WebAPK build yang lancar di server Google.
  * Menambahkan metadata spesifik `apple-touch-icon` untuk performa instalasi PWA di iOS Safari.
  * Menyederhanakan penamaan manifest aplikasi demi kebersihan PWA title bar.
* **Workspace & Collection Navigation:**
  * Menambahkan sistem penamaan otomatis (*auto-increment*) dengan akhiran suffix `(1)`, `(2)`, dst., jika pengguna membuat folder koleksi dengan nama yang sudah ada untuk menghindari konflik penamaan.
  * Optimalisasi navigasi koleksi pada sidebar yang terlipat (*collapsed sidebar*) menggunakan popover flyout.
  * Memperbaiki flow penghapusan reference image di mode refine agar otomatis redirect kembali ke dashboard utama (`/`).

### [v1.3.0] — Collections & Library Folder Management
* **Folder Management:**
  * Implementasi sistem manajemen folder koleksi (*collections folder management*) untuk mempermudah organisasi aset pengguna.
  * Standarisasi tata letak dialog detail gambar dan aksi *trigger* di dalam halaman detail koleksi.
  * Perbaikan label prompt fallback untuk reference image di halaman koleksi.
  * Menambahkan menu tautan "Home" pada dropdown profil pengguna dengan redirect dinamis berbasis environment (`localhost` vs `production`).

### [v1.2.0] — Style Preset & Exporter Features
* **UI Workspace:**
  * Implementasi komponen `StyleGridPopover` untuk mempermudah pemilihan style 3D secara visual di dalam workspace.
  * Menambahkan prompt tips & inspirasi ide instan (*pro tips*) langsung di prompt bar studio.
  * Integrasi modal pemotongan gambar (*image cropper modal*) sebelum gambar dijadikan referensi input.
  * Menambahkan kontrol zoom canvas, panning, serta retensi metadata untuk workspace studio.
* **Asset Exporter Engine:**
  * Implementasi fitur ekspor paket ikon (*icon pack exporter*) untuk keperluan developer (Android, iOS, dan Web asset sizes).
  * Menambahkan card preview grid ekspor ikon pada halaman Library.

### [v1.1.0] — Billing, Analytics & Security Setup
* **Billing & Analytics:**
  * Integrasi PostHog di sisi frontend dan backend untuk pelacakan metrik dan event tracking.
  * Menambahkan pricing dialog ke dalam dashboard.
  * Implementasi refund kredit otomatis jika proses generation gagal/error.
  * Penerapan rate-limiting menggunakan Upstash Redis.
* **Better-Auth Integration:**
  * Migrasi routing handler menggunakan Better-Auth App Router endpoints.
  * Konfigurasi header CORS untuk kemudahan request cross-origin.
  * Pengetatan keamanan cookie handling dengan awalan prefix `__Secure-` untuk domain produksi.
* **Refinement Pipeline:**
  * Dukungan awal untuk mode Refine (iterative editing) dan Image-to-Image (I2I) prompts.

### [v1.0.0] — MVP Studio Launch
* **Core Generator:**
  * Rilis antarmuka pembuatan ikon 3D berbasis Text-to-Image menggunakan API Fal.ai (Flux 2 Pro / Recraft).
  * Dukungan 7 preset posisi kamera: *Isometric, Front Facing, Back Facing, Side Facing, Three Quarter, Top Down,* dan *Dimetric*.
  * Opsi resolusi output: 2K dan 4K.
  * Penyimpanan database menggunakan Neon Postgres + Drizzle ORM.
  * Manajemen file storage gambar referensi dan hasil generate via Cloudflare R2.
