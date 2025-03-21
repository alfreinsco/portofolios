import { kv } from '@vercel/kv';

interface Visitor {
  id: string;
  timestamp: string;
  [key: string]: any;
}

class JsonServerDB {
  private baseUrl = process.env.NODE_ENV === 'production' 
    ? process.env.NEXT_PUBLIC_API_URL 
    : 'http://localhost:3001';

  async lpush(key: string, value: string): Promise<number> {
    const visitor = JSON.parse(value);
    try {
      const response = await fetch(`${this.baseUrl}/${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitor)
      });
      if (!response.ok) throw new Error('Failed to save visitor');
      return 1;
    } catch (error) {
      console.error('JSON Server Error:', error);
      return 0;
    }
  }

  async lrange(key: string, start: number, end: number): Promise<string[]> {
    try {
      const response = await fetch(`${this.baseUrl}/${key}`);
      if (!response.ok) throw new Error('Failed to fetch visitors');
      const data = await response.json();
      return data.map((item: any) => JSON.stringify(item));
    } catch (error) {
      console.error('JSON Server Error:', error);
      return [];
    }
  }
}

// Cek apakah Vercel KV tersedia
const isKVAvailable = process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN;

// Gunakan Vercel KV atau fallback ke penyimpanan lokal
export const db = isKVAvailable ? kv : new JsonServerDB();