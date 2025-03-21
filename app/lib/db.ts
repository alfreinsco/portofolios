import { Database } from 'sqlite3';
import { open } from 'sqlite';
import { mkdir } from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), '.vercel/output/static');

// Pastikan direktori ada
try {
  await mkdir(dbPath, { recursive: true });
} catch (error) {
  console.log('Directory exists or cannot be created');
}

const db = await open({
  filename: path.join(dbPath, 'visitors.db'),
  driver: Database
});

// Buat tabel jika belum ada
await db.exec(`
  CREATE TABLE IF NOT EXISTS visitors (
    id TEXT PRIMARY KEY,
    ip TEXT,
    browser TEXT,
    os TEXT,
    timestamp TEXT
  )
`);

export default db;