import Image from 'next/image';
import React from 'react';
import { photos } from '@/data';

export default function Page({ params }: { params: { id: string } }) {
  const photo = photos.find((photo) => photo.id === params.id)!;
  return (
    <div className="container mx-auto pt-8">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={300}
        height={300}
        className="rounded-lg block mx-auto"
      />
      <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6 leading-8">
        <p>
          <strong>Title: </strong> {photo.alt}
        </p>
        <p>
          <strong>Price: </strong> {photo.price}
        </p>
        <p>
          <strong>Desc: </strong> Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam quaerat dolore doloremque aliquid? Ipsa
          totam, eveniet quo quidem, minus harum incidunt dolorem aperiam
          voluptas doloribus, at sed numquam. Ducimus, consectetur!Lorem Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione est
          eius quisquam libero inventore velit tempora enim nam blanditiis
          aspernatur quaerat sit, nisi eos esse vitae repellendus quia quae!
        </p>
      </div>
    </div>
  );
}
