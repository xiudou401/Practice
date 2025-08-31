import Hero from '@/components/hero';

import scaleSrc from '/public/scale.jpg';
export default function page() {
  return <Hero imgUrl={scaleSrc} altText="Scale" content="Scale..." />;
}
