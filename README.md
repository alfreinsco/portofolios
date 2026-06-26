# Portofolio Alfreinsco

Aplikasi portofolio React murni berbasis Vite, TypeScript, Tailwind CSS, dan React Router DOM.

## Menjalankan Aplikasi

```bash
npm install
npm run dev
```

Untuk menjalankan aplikasi sekaligus JSON Server pengunjung:

```bash
npm run start
```

## Data Static

Konten website dikelola dari folder `src/data` agar mudah diedit dan tetap cocok untuk deploy static seperti Vercel.

- `src/data/profile.ts` untuk profil, kontak, dan sosial media.
- `src/data/portfolio.ts` untuk daftar proyek.
- `src/data/services.ts` untuk layanan.
- `src/data/developerActivity.ts` untuk WakaTime dan GitHub contributions.
- `src/data/skills.ts`, `experience.ts`, `education.ts`, dan `stats.ts` untuk section lainnya.

Setelah mengubah file data, jalankan `npm run build`, lalu deploy ulang.

## API Pengunjung

Next.js API route sebelumnya telah diganti menjadi client-side API call. Secara default aplikasi memakai JSON Server di:

```bash
http://localhost:3001/visitors
```

Jika ingin memakai API eksternal, set environment variable berikut:

```bash
VITE_VISITORS_API_URL=https://domain-api-anda.com/visitors
VITE_CV_URL=/CV_Alfreinsco.pdf
```
