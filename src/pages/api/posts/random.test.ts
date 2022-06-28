import { createMocks } from 'node-mocks-http';

import randomApi from './random.api';

describe('POST /posts/random', () => {
  describe('when there is NO excluded slugs', () => {
    it('returns the correct slug and excluded slugs', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          savedSlugs: [],
        },
      });

      await randomApi(req, res);

      const data = res._getJSONData();

      expect(res.statusCode).toBe(200);
      expect(data).toEqual(
        expect.objectContaining({
          slug: expect.any(String),
          excludedSlugs: expect.any(Array),
        })
      );
      expect(data.excludedSlugs).toHaveLength(1);
    });
  });

  describe('when there is an excluded slug', () => {
    it('returns the correct slug and excluded slugs', async () => {
      const { req, res } = createMocks({
        method: 'POST',
        body: {
          savedSlugs: ['example'],
        },
      });

      await randomApi(req, res);

      const data = res._getJSONData();

      expect(res.statusCode).toBe(200);
      expect(data).toEqual(
        expect.objectContaining({
          slug: expect.any(String),
          excludedSlugs: expect.any(Array),
        })
      );
      expect(data.excludedSlugs).toHaveLength(2);
      expect(data.excludedSlugs).toContain('example');
    });
  });
});
