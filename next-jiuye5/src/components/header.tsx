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
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto p-8  items-center  text-white">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          {linkData.map((link) => (
            <Link
              href={link.href}
              key={link.name}
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
