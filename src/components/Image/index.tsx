import NextImage, { ImageProps } from 'next/image';

const Image = ({ src, children, ...rest }: ImageProps) => {
  const isProd = process.env.NODE_ENV === 'production';
  const finalSrc = isProd ? src : `${process.env.NEXT_PUBLIC_BASE_PATH}${src}`;

  return (
    <NextImage src={finalSrc} {...rest}>
      {children}
    </NextImage>
  );
};

export default Image;
