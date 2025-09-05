import React from 'react';

import { Metadata } from 'next';
// import Hero from '@/components/hero';

// import homeImg from '/public/home.jpg';

export const metadata: Metadata = {
  title: 'Home',
};

export default function page() {
  return (
    <div className="flex mt-6 p-6 bg-gray-500 rounded-lg text-white">
      @children
    </div>
  );
}
