# Panduan Data Static

Website ini memakai data static dari folder `src/data`, sehingga aman untuk deploy ke Vercel tanpa backend/database.

Edit file sesuai kebutuhan:

- `profile.ts` — nama, bio, kontak, avatar, sosial media
- `skills.ts` — daftar skill dan level
- `experience.ts` — pengalaman kerja/proyek
- `education.ts` — riwayat pendidikan
- `services.ts` — layanan yang ditawarkan
- `portfolio.ts` — daftar proyek portfolio
- `stats.ts` — angka statistik di website
- `developerActivity.ts` — link WakaTime dan GitHub contributions

Catatan:

- Gambar tetap diletakkan di `public/img`.
- Path gambar ditulis dari root public, contoh: `/img/project/pmb.png`.
- Setelah mengubah data, jalankan `npm run build` untuk memastikan tidak ada error.
- Deploy ulang website setelah perubahan data selesai.
