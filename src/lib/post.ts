import * as fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

type Author = {
  name?: string;
  avatarUrl?: string;
  username?: string;
};

type Post = {
  slug: string;
  title?: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage?: string;
  ogImage: string;
  author: Author;
  tags: string[];
};

type Field =
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'content'
  | 'date'
  | 'coverImage'
  | 'ogImage'
  | 'author'
  | 'tags';

const POST_FIELDS = [
  'title',
  'date',
  'slug',
  'author',
  'coverImage',
  'ogImage',
  'excerpt',
  'content',
  'tags',
] as Field[];

const SLUG_EXTENSION = /\.md$/;

const postsDirectory = join(process.cwd(), '_posts');

const getPostSlugs = (): string[] => {
  const postFileNames = fs.readdirSync(postsDirectory);

  return postFileNames.map((fileName) => fileName.replace(SLUG_EXTENSION, ''));
};

const getPostBySlug = (slug: string, fields: Field[] = POST_FIELDS): Post => {
  const fullPath = join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    let post = {} as Post;

    fields.forEach((field) => {
      if (field === 'slug') {
        post.slug = slug;
      }

      if (field === 'content') {
        post.content = content;
      }

      if (typeof data[field] !== 'undefined') {
        post = {
          ...post,
          [field]: data[field],
        };
      }
    });

    return post as Post;
  } catch (err) {
    return {} as Post;
  }
};

const getAllPosts = (fields: Field[] = POST_FIELDS): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

const getPostsByTag = (tag: string, fields: Field[] = POST_FIELDS): Post[] => {
  const posts = getAllPosts(fields);

  return posts.filter((post) => post.tags.includes(tag));
};

const getAllTags = (): string[] => {
  const posts = getAllPosts(['tags']);

  const tags = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });

    return acc;
  }, [] as string[]);
  return tags;
};

const randomPostSlug = (savedSlugs: string[] = []): string | null => {
  const newSlugs = getPostSlugs().filter((slug) => !savedSlugs.includes(slug));

  if (newSlugs.length === 0) {
    return null;
  }

  const index = Math.floor(Math.random() * newSlugs.length);

  return newSlugs[index];
};

export {
  getAllPosts,
  getAllTags,
  getPostBySlug,
  getPostsByTag,
  getPostSlugs,
  randomPostSlug,
  POST_FIELDS,
};
export type { Post, Field, Author };
