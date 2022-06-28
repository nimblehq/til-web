import * as fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

type Author = {
  name: string;
  avatar: string;
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
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

const getPostByTag = (tag: string, fields: Field[] = POST_FIELDS): Post[] => {
  const posts = getAllPosts(fields);

  return posts.filter((post) => post.tags.includes(tag));
};

const randomPostSlug = (
  excludedSlugs: string[] = []
): { slug: string; excludedSlugs: string[] } => {
  const slugs = getPostSlugs().filter((slug) => !excludedSlugs.includes(slug));

  if (slugs.length === 0) {
    return { slug: '', excludedSlugs };
  }

  const index = Math.floor(Math.random() * slugs.length);
  const slug = slugs[index];
  excludedSlugs.push(slug);

  return { slug, excludedSlugs };
};

export {
  getAllPosts,
  getPostBySlug,
  getPostByTag,
  getPostSlugs,
  randomPostSlug,
  POST_FIELDS,
};
export type { Post, Field };
