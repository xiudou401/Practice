'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const linkData = [
  { name: 'Performance', href: '/performance' },
  { name: 'Reliability', href: '/reliability' },
  { name: 'Scale', href: '/scale' },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <div className="w-full absolute z-10">
      <div className="flex justify-between container  mx-auto p-8 text-white items-center">
        <Link href="/" className="text-3xl font-bold">
          Home
        </Link>
        <div className="text-xl space-x-2">
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
