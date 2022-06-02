import { getPageTitle, SITE_TITLE } from './pageTitle';

describe('getPageTitle', () => {
  describe('given a title', () => {
    it('returns the title and site title', () => {
      const title = 'My title';

      expect(getPageTitle(title)).toBe(`${title} | ${SITE_TITLE}`);
    });
  });

  describe('given no title', () => {
    it('returns the site title', () => {
      expect(getPageTitle()).toBe(SITE_TITLE);
    });
  });
});
