'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  const linkData = [
    { name: 'Performance', href: '/performance' },
    { name: 'Reliability', href: '/reliability' },
    { name: 'Scale', href: '/scale' },
  ];

  return (
    <div className="w-full absolute z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="text-xl space-x-2">
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
