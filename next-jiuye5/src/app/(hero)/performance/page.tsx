import Hero from '@/components/hero';
import React from 'react';
import performanceImg from '/public/performance.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance',
};

export default function Performance() {
  return (
    <Hero
      imgSrc={performanceImg}
      altText="Performance img"
      content="Performance..."
    />
  );
}
