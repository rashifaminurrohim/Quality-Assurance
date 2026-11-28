# Praktik 1.8 — Manual Visual Regression Check on Checkout

## 1. Deskripsi Praktikum

Praktikum ini bertujuan melakukan pemeriksaan visual regression secara manual dengan membandingkan tampilan halaman checkout sebelum dan sesudah perubahan atau deployment.

Pengujian dilakukan terhadap dua versi halaman:

- **Staging:** versi sebelum deploy sebagai baseline.
- **Production:** versi setelah deploy yang digunakan untuk dibandingkan dengan baseline.

Praktikum menggunakan halaman checkout simulasi berbasis HTML, CSS, dan JavaScript.

## 2. Tujuan Pengujian

1. Mengidentifikasi perubahan visual antara halaman staging dan production.
2. Memeriksa konsistensi layout pada desktop dan mobile.
3. Mengidentifikasi kesalahan teks dan masalah tampilan komponen.
4. Mendokumentasikan hasil pemeriksaan menggunakan screenshot dan tabel analisis.

## 3. Environment Pengujian

| Komponen         | Konfigurasi                           |
| ---------------- | ------------------------------------- |
| Browser          | Google Chrome                         |
| Testing Method   | Manual Visual Regression Check        |
| Desktop Viewport | 1280 × 720 px                        |
| Mobile Viewport  | 390 × 844 px                         |
| Staging URL      | http://localhost:3000/staging.html    |
| Production URL   | http://localhost:3000/production.html |

## 4. Test Procedure

1. Menjalankan local server menggunakan `node server.js`.
2. Membuka halaman staging dan production melalui browser.
3. Mengatur viewport desktop menjadi 1280 × 720 px.
4. Mengambil screenshot masing-masing halaman.
5. Mengatur viewport mobile menjadi 390 × 844 px.
6. Mengambil screenshot masing-masing halaman.
7. Membandingkan posisi, ukuran, teks, dan tampilan komponen checkout.
8. Mencatat hasil perbandingan dalam tabel analisis.

## 5. Hasil Pengujian

Berdasarkan perbandingan visual, ditemukan dua perbedaan:

| No. | Temuan                                 | Hasil                                                                                                 |
| --- | -------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1   | Typo pada heading Ringkasan Pesanan    | Production menampilkan teks "Ringkasan Pesananan", sedangkan staging menampilkan "Ringkasan Pesanan". |
| 2   | Horizontal overflow pada tombol mobile | Tombol "Buat Pesanan" pada production melebar dan bergeser keluar dari panel checkout.                |

Selain itu, tombol pada tampilan desktop tidak menunjukkan perbedaan visual berdasarkan pemeriksaan yang dilakukan.

## 6. Evidence

### Desktop

- [Staging Desktop](evidence/screenshots/checkout-staging-desktop.png)
- [Production Desktop](evidence/screenshots/checkout-production-desktop.png)

### Mobile

- [Staging Mobile](evidence/screenshots/checkout-staging-mobile.png)
- [Production Mobile](evidence/screenshots/checkout-production-mobile.png)

### Analysis

- [Tabel Analisis Visual Regression](evidence/tabel-analisis.csv)

## 7. Kesimpulan

Pemeriksaan visual regression berhasil mengidentifikasi dua visual defect pada halaman production simulasi, yaitu kesalahan penulisan heading dan horizontal overflow pada tombol checkout di tampilan mobile.

Pengujian ini menunjukkan bahwa perbandingan visual pada beberapa ukuran viewport diperlukan untuk memeriksa konsistensi tampilan ant versi aplikasi.

## 8. Limitations

Praktikum ini menggunakan halaman checkout lokal yang dibuat khusus untuk simulasi pengujian. Staging dan production bukan lingkungan deployment dari aplikasi e-commerce sungguhan.

Perbedaan visual pada halaman production telah disiapkan sebagai contoh defect agar proses identifikasi, perbandingan, dan dokumentasi dapat dilakukan secara terstruktur.
