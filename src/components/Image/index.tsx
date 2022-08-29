import NextImage, { ImageProps } from 'next/image';

import { isValidUrl } from 'helpers/url';

const Image = ({ src, children, ...rest }: ImageProps) => {
  const isProd = process.env.NODE_ENV === 'production';
  let finalSrc;

  if (typeof src === 'string' && isValidUrl(src)) {
    finalSrc = src;
  } else {
    finalSrc = isProd ? src : `${process.env.NEXT_PUBLIC_BASE_PATH}${src}`;
  }

  return (
    <NextImage src={finalSrc} {...rest}>
      {children}
    </NextImage>
  );
};

export default Image;
