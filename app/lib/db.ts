import { kv } from '@vercel/kv';

interface Visitor {
  id: string;
  timestamp: string;
  [key: string]: any;
}

class LocalStorage {
  private visitors: Visitor[] = [];

  async lpush(key: string, value: string): Promise<number> {
    const visitor = JSON.parse(value);
    this.visitors.unshift(visitor);
    return this.visitors.length;
  }

  async lrange(key: string, start: number, end: number): Promise<string[]> {
    return this.visitors.map(v => JSON.stringify(v));
  }
}

// Cek apakah Vercel KV tersedia
const isKVAvailable = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

// Gunakan Vercel KV atau fallback ke penyimpanan lokal
export const db = isKVAvailable ? kv : new LocalStorage();