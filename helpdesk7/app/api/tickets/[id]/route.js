import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  const res = await fetch(`http://localhost:4000/tickets/${params.id}`);
  const ticket = await res.json();
  return NextResponse.json(ticket, { status: 200 });
}
