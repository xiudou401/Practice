import Hero from '@/components/hero';
import React from 'react';
import scaleImg from '/public/scale.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Scale',
};
export default function Scale() {
  return <Hero imgUrl={scaleImg} altText="Scale img" content="Scale..." />;
}
