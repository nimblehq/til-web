import * as fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  coverImage: string;
  ogImage: string;
  author: string;
};

type Field =
  | 'slug'
  | 'title'
  | 'excerpt'
  | 'content'
  | 'date'
  | 'coverImage'
  | 'ogImage'
  | 'author';

const BASIC_FIELDS = [
  'title',
  'date',
  'slug',
  'author',
  'coverImage',
  'excerpt',
] as Field[];

const SLUG_EXTENSION = /\.md$/;

const postsDirectory = join(process.cwd(), '_posts');

const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

const getPostBySlug = (slug: string, fields: Field[] = []): Post => {
  const realSlug = slug.replace(SLUG_EXTENSION, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    let post = {} as Post;

    fields.forEach((field) => {
      if (field === 'slug') {
        post.slug = realSlug;
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

const getAllPosts = (fields: Field[] = []): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};

export { getPostBySlug, getAllPosts, BASIC_FIELDS };
export type { Post, Field };
