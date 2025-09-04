import Image, { StaticImageData } from 'next/image';

interface IProps {
  imgSrc: StaticImageData;
  altText: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image src={props.imgSrc} alt="altText" fill className="object-cover" />
        <div className="absolute inset-0"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h1 className="text-white text-6xl ">{props.content}</h1>
      </div>
    </div>
  );
}
