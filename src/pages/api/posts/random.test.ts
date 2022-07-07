import { createMocks } from 'node-mocks-http';

import randomApi from './random.api';

describe('POST /posts/random', () => {
  describe('when there is NO saved slugs', () => {
    it('returns the random slug', async () => {
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
        })
      );
    });
  });

  describe('when there is an saved slug', () => {
    it('returns the random slug', async () => {
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
        })
      );
    });
  });
});
