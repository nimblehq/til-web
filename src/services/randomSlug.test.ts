import axios from 'axios';

import { randomSlug, RANDOM_POSTS_KEY } from './randomSlug';

jest.mock('axios');

describe('randomSlug', () => {
  beforeEach(() => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    const response = {
      data: {
        slug: 'example',
      },
    };

    mockedAxios.post.mockResolvedValueOnce(response);
    jest.spyOn(Object.getPrototypeOf(sessionStorage), 'setItem');
    Object.setPrototypeOf(sessionStorage.setItem, jest.fn());
  });

  it('returns the random slug and adds the returned slug to session storage', async () => {
    const slug = await randomSlug();

    expect(slug).toBe('example');
    expect(sessionStorage.setItem).toHaveBeenCalledWith(
      RANDOM_POSTS_KEY,
      JSON.stringify(['example'])
    );
  });
});
