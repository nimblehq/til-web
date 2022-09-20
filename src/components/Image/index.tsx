import NextImage, { ImageProps } from 'next/image';

import { getAssetUrl } from 'helpers/url';

const Image = ({ src, children, ...rest }: ImageProps) => {
  return (
    <NextImage src={getAssetUrl(src)} {...rest}>
      {children}
    </NextImage>
  );
};

export default Image;
