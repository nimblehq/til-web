import { getAssetUrl, isValidUrl } from './url';

describe('URL helper', () => {
  describe('isValidUrl', () => {
    describe('when URL is valid', () => {
      it('returns true', () => {
        const url = 'https://example.com';

        const isValid = isValidUrl(url);

        expect(isValid).toBe(true);
      });
    });

    describe('when URL is NOT valid', () => {
      it('returns false', () => {
        const url = 'invalid-url';

        const isValid = isValidUrl(url);

        expect(isValid).toBe(false);
      });
    });
  });

  describe('getAssetUrl', () => {
    describe('given a valid URL', () => {
      it('returns the URL', () => {
        const url = 'https://example.com';

        const assetUrl = getAssetUrl(url);

        expect(assetUrl).toBe(url);
      });
    });

    describe('given a path', () => {
      const originalEnv = process.env;

      afterEach(() => {
        process.env = originalEnv;
      });

      describe('when in production', () => {
        it('returns the path', () => {
          process.env = { ...originalEnv, NODE_ENV: 'production' };

          const path = '/path/to/asset';

          const assetUrl = getAssetUrl(path);

          expect(assetUrl).toBe(path);
        });
      });

      describe('when NOT in production', () => {
        it('returns the path prefixed with the base path', () => {
          process.env = { ...originalEnv, NODE_ENV: 'development' };

          const path = '/path/to/asset';

          const assetUrl = getAssetUrl(path);

          expect(assetUrl).toBe(`${process.env.NEXT_PUBLIC_BASE_PATH}${path}`);
        });
      });
    });

    describe('given an INVALID path', () => {
      it('returns an empty string', () => {
        const path = 123;

        const assetUrl = getAssetUrl(path);

        expect(assetUrl).toBe('');
      });
    });
  });
});
