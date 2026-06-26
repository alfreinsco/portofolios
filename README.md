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
