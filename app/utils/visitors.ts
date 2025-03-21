import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const VISITORS_FILE = path.join(process.cwd(), 'pengunjung.json');

interface Visitor {
  id: string;
  ip: string;
  browser: string;
  os: string;
  timestamp: string;
}

// Fungsi untuk membaca data pengunjung
export async function getVisitors() {
  const res = await fetch('/api/visitors');
  return res.json();
}

// Fungsi untuk menambah pengunjung baru
export async function addVisitor(visitorData: { ip: string; browser: string; os: string; }) {
  const res = await fetch('/api/visitors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(visitorData)
  });
  return res.json();
} 