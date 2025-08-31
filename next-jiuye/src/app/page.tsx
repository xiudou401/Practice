import Hero from '@/components/hero';
import React from 'react';
import homeUrl from '/public/home.jpg';

export default function Page() {
  return (
    <Hero
      imgUrl={homeUrl}
      altText="Home"
      content="Professional Cloud Hosting"
    />
  );
}
