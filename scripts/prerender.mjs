import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import { spawn } from 'node:child_process';

const distDir = resolve('dist');
const routes = ['/', '/portofolio'];
const chromeCandidates = [
  process.env.CHROME_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  'google-chrome',
  'chromium',
].filter(Boolean);

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

function findChrome() {
  return chromeCandidates.find((candidate) => candidate && (candidate.includes('/') ? existsSync(candidate) : true));
}

async function fileResponse(pathname) {
  const cleanPath = decodeURIComponent(pathname.split('?')[0]);
  const relativePath = cleanPath === '/' ? 'index.html' : cleanPath.replace(/^\//, '');
  const directPath = join(distDir, relativePath);
  const fallbackPath = join(distDir, 'index.html');
  const filePath = existsSync(directPath) ? directPath : fallbackPath;
  const body = await readFile(filePath);
  return { body, type: mimeTypes[extname(filePath)] || 'application/octet-stream' };
}

function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const { body, type } = await fileResponse(req.url || '/');
      res.writeHead(200, { 'Content-Type': type });
      res.end(body);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(String(error));
    }
  });

  return new Promise((resolveServer) => {
    server.listen(0, '127.0.0.1', () => {
      const address = server.address();
      if (!address || typeof address === 'string') throw new Error('Unable to start prerender server');
      resolveServer({ server, port: address.port });
    });
  });
}

function dumpDom(chromePath, url) {
  const args = [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-background-networking',
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=4000',
    '--user-data-dir=/tmp/alfreinsco-prerender-chrome',
    '--dump-dom',
    url,
  ];

  return new Promise((resolveDump, reject) => {
    const child = spawn(chromePath, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });

    child.on('error', reject);
    const timeout = setTimeout(() => {
      child.kill('SIGKILL');
      reject(new Error(`Chrome timed out while pre-rendering ${url}`));
    }, 20000);

    child.on('close', (code) => {
      clearTimeout(timeout);
      if (code !== 0) {
        reject(new Error(`Chrome exited with code ${code}\n${stderr}`));
        return;
      }
      resolveDump(stdout);
    });
  });
}

async function writeRoute(route, html) {
  const normalized = route === '/' ? '/index.html' : `${route.replace(/\/$/, '')}/index.html`;
  const outputPath = join(distDir, normalized);
  await mkdir(resolve(outputPath, '..'), { recursive: true });
  await writeFile(outputPath, html);
}

const chromePath = findChrome();
if (!chromePath) {
  throw new Error('Chrome/Chromium tidak ditemukan. Set CHROME_PATH untuk menjalankan pre-render.');
}

const { server, port } = await startServer();
try {
  for (const route of routes) {
    const url = `http://127.0.0.1:${port}${route}`;
    const html = await dumpDom(chromePath, url);
    if (!html.includes('Full Stack Developer') && !html.includes('Daftar Proyek')) {
      throw new Error(`Pre-render route ${route} gagal: konten utama tidak ditemukan.`);
    }
    await writeRoute(route, html);
    console.log(`pre-rendered ${route}`);
  }
} finally {
  server.close();
}
