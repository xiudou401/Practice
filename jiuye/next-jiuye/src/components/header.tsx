'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const linkData = [
  { name: 'Performance', href: '/performance' },
  { name: 'Reliability', href: '/reliability' },
  { name: 'Scale', href: '/scale' },
];

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <div>
          {linkData.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={pathname === link.href ? 'text-purple-500' : ''}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
