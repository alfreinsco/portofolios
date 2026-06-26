import { v4 as uuidv4 } from 'uuid';

export interface Visitor {
  id: string;
  ip: string;
  browser: string;
  os: string;
  timestamp: string;
}

const VISITORS_API_URL = import.meta.env.VITE_VISITORS_API_URL || 'http://localhost:3001/visitors';

export async function getVisitors(): Promise<Visitor[]> {
  try {
    const res = await fetch(VISITORS_API_URL);
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching visitors:', error);
    return [];
  }
}

export async function addVisitor(visitorData: { ip: string; browser: string; os: string; }) {
  const newVisitor: Visitor = {
    id: uuidv4(),
    ...visitorData,
    timestamp: new Date().toISOString(),
  };

  try {
    const res = await fetch(VISITORS_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newVisitor),
    });

    if (!res.ok) return newVisitor;
    return res.json();
  } catch (error) {
    console.error('Error adding visitor. Configure VITE_VISITORS_API_URL for an external API or run json-server:', error);
    return newVisitor;
  }
}
