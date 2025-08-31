import Hero from '@/components/hero';

import reliabilitySrc from '/public/reliability.jpg';
export default function page() {
  return (
    <Hero
      imgUrl={reliabilitySrc}
      altText="Reliability"
      content="Reliability..."
    />
  );
}
