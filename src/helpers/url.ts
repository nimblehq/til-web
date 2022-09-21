const isValidUrl = (url: string) => {
  try {
    return Boolean(new URL(url));
  } catch (e) {
    return false;
  }
};

const getAssetUrl = (path: string | unknown): string => {
  if (typeof path !== 'string') return '';

  if (isValidUrl(path)) {
    return path;
  }

  const isProduction = process.env.NODE_ENV === 'production';

  return isProduction ? path : `${process.env.NEXT_PUBLIC_BASE_PATH}${path}`;
};

export { isValidUrl, getAssetUrl };
