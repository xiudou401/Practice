import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface IProps {
  imgUrl: StaticImageData;
  altText: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute -z-10 inset-0">
        <Image src={props.imgUrl} alt={props.altText} />
      </div>
      <div>
        <h1>{props.content}</h1>
      </div>
    </div>
  );
}
