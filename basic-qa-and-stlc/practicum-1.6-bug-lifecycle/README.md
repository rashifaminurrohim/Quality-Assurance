
# Practical 1.6 — Bug Lifecycle Simulation

## Overview

Praktikum ini dilakukan untuk memahami siklus hidup bug (*bug lifecycle*) menggunakan Jira. Simulasi mencakup pembuatan bug report, penentuan Severity dan Priority, assignment kepada Developer, proses perbaikan, QA retesting, reopening, hingga penutupan issue.

**Tools:** Jira
**Project:** QA Bug Lifecycle Practice
**Project Key:** QBLP
**Issue Key:** QBLP-1
**Issue Type:** Bug
**Severity:** Major
**Priority:** High
**Final Status:** Closed

## Bug Description

**Title:** Checkout Error saat Voucher Tertentu Dimasukkan

**Scenario:**
Pengguna mengalami error ketika memasukkan kode voucher tertentu pada proses checkout aplikasi e-commerce.

**Steps to Reproduce:**

1. Buka aplikasi e-commerce.
2. Tambahkan produk ke keranjang.
3. Lanjutkan ke halaman checkout.
4. Masukkan kode voucher yang valid.
5. Klik tombol Apply Voucher.

**Expected Result:**
Sistem berhasil memvalidasi voucher dan menerapkan potongan harga pada total pesanan.

**Actual Result:**
Sistem menampilkan error sehingga pengguna tidak dapat melanjutkan proses checkout.

## Severity and Priority

| Attribute | Value | Reason                                                                    |
| --------- | ----- | ------------------------------------------------------------------------- |
| Severity  | Major | Bug menghambat proses checkout pada skenario penggunaan voucher tertentu. |
| Priority  | High  | Masalah berdampak pada transaksi dan perlu segera ditangani.              |

## Bug Lifecycle

Bug dikelola melalui tahapan berikut:

| No. | Status      | Role      | Activity                                                                        |
| --- | ----------- | --------- | ------------------------------------------------------------------------------- |
| 1   | Open        | QA        | Membuat bug report.                                                             |
| 2   | Assigned    | QA        | Menetapkan issue kepada Developer.                                              |
| 3   | In Progress | Developer | Memulai investigasi dan perbaikan.                                              |
| 4   | Resolved    | Developer | Menyelesaikan perbaikan pertama.                                                |
| 5   | Retest      | QA        | Melakukan retest pertama.                                                       |
| 6   | Reopened    | QA        | Membuka kembali issue karena bug masih ditemukan dalam simulasi retest pertama. |
| 7   | In Progress | Developer | Melanjutkan investigasi dan perbaikan.                                          |
| 8   | Resolved    | Developer | Menyelesaikan perbaikan lanjutan.                                               |
| 9   | Retest      | QA        | Melakukan retest kedua.                                                         |
| 10  | Closed      | QA        | Menutup issue setelah hasil retest kedua dinyatakan lulus.                      |

## Retest Results

### First Retest — Failed

QA melakukan simulasi pengujian terhadap proses penerapan voucher. Bug masih ditemukan sehingga perbaikan pertama dinyatakan belum berhasil menyelesaikan masalah.

Issue kemudian dikembalikan kepada Developer melalui status **Reopened** untuk investigasi dan perbaikan lanjutan.

### Second Retest — Passed

Setelah perbaikan lanjutan, QA melakukan simulasi retest kedua.

Hasil pengujian menunjukkan bahwa:

- Voucher berhasil divalidasi.
- Diskon berhasil diterapkan pada total pesanan.
- Proses checkout dapat dilanjutkan.
- Tidak ditemukan masalah pada skenario yang disimulasikan.

Issue kemudian dipindahkan ke status **Closed**.

## Roles and Responsibilities

| Role      | Responsibility                                                                                                                                 |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| QA        | Membuat bug report, menentukan Severity dan Priority, melakukan retest, serta memutuskan apakah issue dapat ditutup atau perlu dibuka kembali. |
| Developer | Menerima assignment, melakukan investigasi, memperbaiki bug, dan memberikan pembaruan melalui komentar Jira.                                   |

Praktikum menggunakan dua akun Jira untuk menyimulasikan aktivitas QA dan Developer.

## Evidence

Dokumentasi screenshot tersedia pada folder `evidence/screenshots/`.

## Limitations

Praktikum ini merupakan simulasi proses bug lifecycle di Jira, bukan pengujian langsung terhadap aplikasi e-commerce yang berjalan. Hasil retest merepresentasikan simulasi alur QA dan Developer untuk mempraktikkan pengelolaan issue, bukan bukti bahwa bug pada aplikasi nyata telah diperbaiki.

## Conclusion

Praktikum ini mencakup proses pengelolaan bug menggunakan Jira, mulai dari pembuatan bug report, klasifikasi Severity dan Priority, assignment, investigasi Developer, QA retesting, reopening, hingga penutupan issue.

Siklus simulasi menunjukkan bahwa issue tidak langsung ditutup ketika Developer menyatakan perbaikan selesai. QA perlu melakukan verifikasi terlebih dahulu dan dapat membuka kembali issue apabila masalah masih ditemukan.
