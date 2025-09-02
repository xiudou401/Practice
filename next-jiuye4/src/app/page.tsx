import Hero from '@/components/hero';
import React from 'react';
import homeImg from '/public/home.jpg';

export default function page() {
  return <Hero imgUrl={homeImg} altText="Home img" content="Welcome" />;
}
