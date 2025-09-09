import { NextResponse } from 'next/server';
import db from '@/db';

interface IParams {
  params: { id: string };
}

export async function DELETE(request: Request, { params }: IParams) {
  await db.update(({ posts }) => {
    const idx = posts.findIndex((post) => post.id === params.id);
    posts.splice(idx, 1);
  });
  return NextResponse.json({ code: 0, message: 'deleted' });
}

export async function PATCH(request: Request) {}

export async function GET(request: Request) {}
