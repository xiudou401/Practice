import Hero from '@/components/hero';
import React from 'react';
import reliabilityImg from '/public/reliability.jpg';

export default function page() {
  return (
    <Hero
      imgUrl={reliabilityImg}
      altText="Reliability img"
      content="Reliability..."
    />
  );
}
