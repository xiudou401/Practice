import { notFound, redirect } from 'next/navigation';
import React from 'react';

const getTicket = async (id) => {
  const res = await fetch(`http://localhost:4000/tickets/${id}`);
  if (!res.ok) {
    redirect(`/tickets/not-found?id=${id}`);
  }
  return res.json();
};

export default async function Ticket({ params }) {
  const { id } = params;
  const ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
