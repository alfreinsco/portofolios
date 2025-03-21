import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../../lib/db';

export async function GET() {
  try {
    const visitors = await db.lrange('visitors', 0, -1);
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
    console.error('Database Error:', error);
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
      await db.lpush('visitors', JSON.stringify(newVisitor));
      return NextResponse.json(newVisitor);
    } catch (dbError) {
      console.error('Storage Error:', dbError);
      return NextResponse.json(
        { error: 'Failed to store visitor data' },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error('Request Processing Error:', error);
    return NextResponse.json(
      { error: 'Invalid request format' },
      { status: 400 }
    );
  }
}