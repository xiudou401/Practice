import React from 'react';
import homeUrl from '/public/home.jpg';
import Hero from '@/components/hero';

export default function Page() {
  return <Hero imgUrl={homeUrl} altText="Home page" content="Home" />;
}
