import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const VISITORS_FILE = path.join(process.cwd(), 'pengunjung.json');

export async function GET() {
  try {
    const data = await fs.readFile(VISITORS_FILE, 'utf-8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  const visitorData = await request.json();
  const visitors = await getVisitors();
  
  const newVisitor = {
    id: uuidv4(),
    ...visitorData,
    timestamp: new Date().toISOString()
  };
  
  visitors.push(newVisitor);
  await fs.writeFile(VISITORS_FILE, JSON.stringify(visitors, null, 2));
  
  return NextResponse.json(newVisitor);
}

async function getVisitors() {
  try {
    const data = await fs.readFile(VISITORS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
} 