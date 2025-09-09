import { NextResponse } from 'next/server';
import db from '@/db';

export async function GET(request: Request) {}

export async function POST(request: Request) {
  const data = await request.json();
  await db.update(({ posts }) =>
    posts.unshift({
      id: Math.random().toString(36).slice(-8),
      ...data,
    })
  );
  return NextResponse.json({ code: 0, message: 'added', data });
}
