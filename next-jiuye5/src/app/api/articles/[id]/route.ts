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

export async function PATCH(request: Request, { params }: IParams) {
  const data = await request.json();
  let idx = -1;
  await db.update(({ posts }) => {
    idx = posts.findIndex((post) => post.id === params.id);
    posts[idx] = { ...posts[idx], ...data };
  });
  return NextResponse.json({
    code: 0,
    message: 'updated',
    data: db.data.posts[idx],
  });
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const post = db.data.posts.find((post) => post.id === params.id);
  return NextResponse.json({ code: 0, message: 'findIt', data: post });
}
