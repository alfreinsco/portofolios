import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { render } from '../dist-ssr/prerender.js';

const distDir = resolve('dist');
const template = await readFile(join(distDir, 'index.html'), 'utf8');
const routes = [
  {
    path: '/',
    title: 'Marthin Alfreinsco Salakory | Full Stack Developer & Software Engineer',
    description:
      'Portofolio Marthin Alfreinsco Salakory, Full Stack Developer dari Ambon yang membangun aplikasi web, mobile, dashboard, sistem informasi, REST API, dan solusi digital untuk institusi, bisnis, dan organisasi.',
    canonical: 'https://alfreinsco.vercel.app/',
  },
  {
    path: '/portofolio',
    title: 'Daftar Proyek | Marthin Alfreinsco Salakory',
    description:
      'Daftar proyek Marthin Alfreinsco Salakory, Full Stack Developer dari Ambon untuk sistem informasi, web app, dashboard, aplikasi bisnis, Laravel, React, REST API, dan deployment.',
    canonical: 'https://alfreinsco.vercel.app/portofolio',
  },
];

function setAttribute(html, selector, value) {
  return html.replace(selector, value);
}

function applyHead(html, route) {
  let next = html;
  next = next.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  next = next.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/>/, `<meta name="description" content="${route.description}" />`);
  next = next.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/, `<link rel="canonical" href="${route.canonical}" />`);
  next = next.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/, `<meta property="og:title" content="${route.title}" />`);
  next = next.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/, `<meta property="og:description" content="${route.description}" />`);
  next = next.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/, `<meta property="og:url" content="${route.canonical}" />`);
  next = next.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${route.title}" />`);
  next = next.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${route.description}" />`);
  return next;
}

async function writeRoute(route) {
  const appHtml = render(route.path);
  const html = applyHead(template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`), route);
  const outputPath = route.path === '/' ? join(distDir, 'index.html') : join(distDir, route.path, 'index.html');
  await mkdir(resolve(outputPath, '..'), { recursive: true });
  await writeFile(outputPath, html);
  console.log(`pre-rendered ${route.path}`);
}

for (const route of routes) {
  await writeRoute(route);
}
