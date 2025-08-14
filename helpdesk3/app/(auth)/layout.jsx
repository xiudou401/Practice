import Link from 'next/link';
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up</Link>
      </nav>
      {children}
    </div>
  );
}
