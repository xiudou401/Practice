import { notFound } from 'next/navigation';
import React from 'react';

export default function Page() {
  notFound();
  return <div>page</div>;
}
