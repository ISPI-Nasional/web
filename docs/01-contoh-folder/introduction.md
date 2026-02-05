---
id: introduction
title: Pengenalan Dokumentasi
sidebar_label: Pengenalan
sidebar_position: 1
---

# Pengenalan Dokumentasi

Selamat datang di halaman pengenalan. File ini adalah template standar untuk dokumentasi Docusaurus dengan fitur lengkap.

## Daftar Isi
<!-- TOC otomatis dihasilkan oleh Docusaurus berdasarkan heading, tetapi Anda bisa menambahkannya manual jika perlu -->

1. [Tentang Fitur](#tentang-fitur)
2. [Admonitions](#admonitions)
3. [Kesimpulan](#kesimpulan)

---

## Tentang Fitur

Docusaurus menggunakan Markdown dengan beberapa tambahan fitur "*magic*".

### 1. Front Matter
Bagian di paling atas file (di antara `---`) disebut **Front Matter**. Ini mengontrol metadata halaman.
- `id`: ID unik untuk URL (opsional, defaultnya nama file).
- `title`: Judul halaman (H1).
- `sidebar_label`: Teks yang muncul di menu samping.
- `sidebar_position`: Urutan di sidebar (1, 2, 3, dst).

### 2. Table of Contents (TOC)
Di sebelah kanan halaman (pada desktop), Docusaurus otomatis membuat daftar isi dari heading `##` dan `###`. Anda tidak perlu membuatnya manual.

---

## Admonitions

Gunakan admonitions untuk memberikan *highlight* pada informasi penting.

:::tip Tips Bermanfaat
Ini adalah contoh **Tip**. Gunakan ini untuk memberikan saran atau trik yang membantu pengguna.
:::

:::note Catatan
Ini adalah **Catatan** netral. Berguna untuk info tambahan.
:::

:::info Informasi
Gunakan ini untuk informasi umum yang perlu diketahui pengguna.
:::

:::warning Peringatan
Hati-hati! Gunakan ini untuk hal yang perlu diwaspadai pengguna.
:::

:::danger Bahaya
Ini untuk situasi kritis atau tindakan yang berisiko tinggi.
:::

---

## Struktur Folder & File

Agar file Anda tertata rapi dan otomatis urut di sidebar, gunakan penamaan folder dengan prefix angka:

- `docs/`
  - `01-intro/` (Akan muncul pertama)
  - `02-tutorial/` (Akan muncul kedua)
    - `01-basics.md`
    - `02-advanced.md`

Docusaurus akan secara otomatis mengurutkan folder berdasarkan prefix angka tersebut (`01-`, `02-`) tetapi akan menyembunyikan angka tersebut di tampilan akhir URL dan Sidebar.
