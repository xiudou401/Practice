import Image, { StaticImageData } from 'next/image';

interface IProps {
  imgUrl: StaticImageData;
  altText: string;
  content: string;
}

export default function Hero(props: IProps) {
  return (
    <div className="h-screen relative">
      {/* 父容器高度占满整个视口，开启 relative 作为定位参考 */}
      <div className="absolute inset-0 -z-10">
        {/* 子元素绝对定位，占满父容器，置于最底层 */}
        <Image
          src={props.imgUrl}
          alt={props.altText}
          fill
          style={{ objectFit: 'cover' }}
        />
        {/* 图片等比填充父容器，多余部分裁剪 */}
        <div></div>
      </div>
      <div className="flex justify-center pt-48">
        {/* Flex 布局，水平居中，顶部内边距 */}
        <h1 className="text-white text-6xl">{props.content}</h1>
        {/* 白色文字，超大字号 */}
      </div>
    </div>
  );
}
