import React from 'react';

import { Metadata } from 'next';
import Hero from '@/components/hero';

import homeImg from '/public/home.jpg';

export const metadata: Metadata = {
  title: 'Home',
};

export default function page() {
  return (
    <Hero imgSrc={homeImg} altText="home image" content="welcome home..." />
  );
}
