import axios from 'axios';

import {
  getFromSessionStorage,
  removeFromSessionStorage,
  saveToSessionStorage,
} from './sessionStorage';

type RandomPostQueryResult = {
  slug: string;
  excludedSlugs: string[];
};

const RANDOM_POSTS_KEY = 'randomPosts';
const RANDOM_POSTS_SLUG_PATH = 'http://localhost:3000/api/posts/random';

const randomSlug = async (): Promise<string> => {
  const savedSlugs = getFromSessionStorage<string[]>(RANDOM_POSTS_KEY) || [];

  try {
    const response = await axios.post(RANDOM_POSTS_SLUG_PATH, {
      savedSlugs,
    });
    const { slug, excludedSlugs }: RandomPostQueryResult = response.data;

    saveToSessionStorage(RANDOM_POSTS_KEY, excludedSlugs);

    if (slug === '') {
      removeFromSessionStorage(RANDOM_POSTS_KEY);
    }

    return slug;
  } catch (error) {
    console.error(error);

    return '';
  }
};

export { randomSlug, RANDOM_POSTS_KEY };
