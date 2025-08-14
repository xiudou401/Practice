import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  return (
    <nav>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
