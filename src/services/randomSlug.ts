import axios from 'axios';

import {
  getFromSessionStorage,
  removeFromSessionStorage,
  saveToSessionStorage,
} from '../helpers/sessionStorage';

type RandomPostQueryResult = {
  slug: string;
};

const RANDOM_POSTS_KEY = 'randomPosts';
const RANDOM_POSTS_SLUG_PATH = '/til/api/posts/random';

const randomSlug = async (): Promise<string | null> => {
  const savedSlugs = getFromSessionStorage<string[]>(RANDOM_POSTS_KEY) || [];

  try {
    const response = await axios.post(RANDOM_POSTS_SLUG_PATH, {
      savedSlugs,
    });
    const { slug }: RandomPostQueryResult = response.data;

    if (!slug) {
      removeFromSessionStorage(RANDOM_POSTS_KEY);
    } else {
      savedSlugs.push(slug);
      saveToSessionStorage(RANDOM_POSTS_KEY, savedSlugs);
    }

    return slug;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export { randomSlug, RANDOM_POSTS_KEY };
