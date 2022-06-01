const SITE_TITLE = 'TIL by Nimble';

const getPageTitle = (title?: string) => {
  if (title) {
    return `${title} | ${SITE_TITLE}`;
  }

  return SITE_TITLE;
};

export { SITE_TITLE, getPageTitle };
