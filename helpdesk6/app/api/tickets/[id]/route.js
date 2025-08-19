import { NextResponse } from 'next/server';

export async function GET(_, { params }) {
  const id = params.id;
  const res = await fetch(`http://localhost:4000/tickets/${id}`);

  if (!res.ok) {
    return NextResponse.json({ error: 'Cannot find the ticket' });
  }
  const ticket = await res.json();
  return NextResponse.json(ticket, { status: 200 });
}
