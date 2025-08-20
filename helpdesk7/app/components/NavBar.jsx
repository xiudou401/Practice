import Link from 'next/link';
import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
    </nav>
  );
}
