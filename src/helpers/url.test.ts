import { isValidUrl } from './url';

describe('URL helper', () => {
  describe('isValidUrl', () => {
    describe('when URL is valid', () => {
      it('returns true', () => {
        const url = 'https://example.com';

        const isValid = isValidUrl(url);

        expect(isValid).toBe(true);
      });
    });

    describe('when URL is invalid', () => {
      it('returns false', () => {
        const url = 'invalid-url';

        const isValid = isValidUrl(url);

        expect(isValid).toBe(false);
      });
    });
  });
});
