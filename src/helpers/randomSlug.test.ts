import axios from 'axios';

import { randomSlug, RANDOM_POSTS_KEY } from './randomSlug';

jest.mock('axios');

describe('randomSlug', () => {
  it('returns a slug and saves the excludedSlugs to session storage', async () => {
    const response = {
      data: {
        slug: 'example',
        excludedSlugs: ['example'],
      },
    };
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.post.mockResolvedValueOnce(response);

    const slug = await randomSlug();

    expect(mockedAxios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/posts/random',
      {
        savedSlugs: [],
      }
    );
    expect(slug).toBe('example');
    expect(sessionStorage.getItem(RANDOM_POSTS_KEY)).toBe(
      JSON.stringify(['example'])
    );
  });
});
