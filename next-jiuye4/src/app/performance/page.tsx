import Hero from '@/components/hero';
import React from 'react';
import performanceImg from '/public/performance.jpg';

export default function Performance() {
  return (
    <Hero
      imgUrl={performanceImg}
      altText="Performance img"
      content="Performance..."
    />
  );
}
