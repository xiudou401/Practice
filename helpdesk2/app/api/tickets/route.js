import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('http://localhost:4000/tickets');
  const tickets = await res.json();

  return NextResponse.json(tickets, { status: 200 });
}

export async function POST(request) {
  const ticket = await request.json();
  const res = await fetch('http://localhost:4000/tickets', {
    method: 'POST', // use uppercase for clarity
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  });
  const newTicket = await res.json();

  return NextResponse.json(newTicket, { status: 200 });
}
