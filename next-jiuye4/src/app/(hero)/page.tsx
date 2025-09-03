import Hero from '@/components/hero';
import React from 'react';
import homeImg from '/public/home.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function page() {
  return <Hero imgUrl={homeImg} altText="Home img" content="Welcome" />;
}
