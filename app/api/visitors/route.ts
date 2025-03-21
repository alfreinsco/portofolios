import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { kv } from '@vercel/kv';

export async function GET() {
  try {
    const visitors = await kv.lrange('visitors', 0, -1);
    if (!Array.isArray(visitors)) {
      return NextResponse.json([]);
    }
    const parsedVisitors = visitors.map(visitor => {
      try {
        return JSON.parse(visitor);
      } catch {
        return null;
      }
    }).filter(Boolean);
    return NextResponse.json(parsedVisitors);
  } catch (error) {
    console.error('KV Error:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    // Validasi input
    const visitorData = await request.json();
    if (!visitorData) {
      return NextResponse.json(
        { error: 'Invalid visitor data' }, 
        { status: 400 }
      );
    }

    const newVisitor = {
      id: uuidv4(),
      ...visitorData,
      timestamp: new Date().toISOString()
    };
    
    // Coba simpan ke KV dengan penanganan error yang lebih spesifik
    try {
      await kv.lpush('visitors', JSON.stringify(newVisitor));
    } catch (kvError) {
      console.error('KV Storage Error:', kvError);
      return NextResponse.json(
        { error: 'Database connection failed' },
        { status: 503 }
      );
    }

    return NextResponse.json(newVisitor);
  } catch (error) {
    console.error('Request Processing Error:', error);
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
}