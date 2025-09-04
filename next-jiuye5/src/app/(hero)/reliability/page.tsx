import Hero from '@/components/hero';
import React from 'react';
import reliabilityImg from '/public/reliability.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reliability',
};

export default function page() {
  return (
    <Hero
      imgSrc={reliabilityImg}
      altText="Reliability img"
      content="Reliability..."
    />
  );
}
