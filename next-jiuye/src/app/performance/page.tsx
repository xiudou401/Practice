import Hero from '@/components/hero';
import React from 'react';
import performanceSrc from '/public/performance.jpg';
export default function page() {
  return (
    <Hero
      imgUrl={performanceSrc}
      altText="Performance"
      content="Performance..."
    />
  );
}
