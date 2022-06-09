import NextImage, { ImageProps } from 'next/image';
import { useRouter } from 'next/router';

const Image = ({ src, children, ...rest }: ImageProps) => {
  const isProd = process.env.NODE_ENV === 'production';
  const { basePath } = useRouter();
  const finalSrc = isProd ? src : `${basePath}${src}`;

  return (
    <NextImage src={finalSrc} {...rest}>
      {children}
    </NextImage>
  );
};

export default Image;
