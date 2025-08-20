import Link from 'next/link';
import React from 'react';
import LogoutButton from './LogoutButton';

export default function NavBar({ user }) {
  return (
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
}
