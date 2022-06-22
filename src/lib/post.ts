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

const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

const getPostBySlug = (slug: string, fields: Field[] = POST_FIELDS): Post => {
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

export { getPostBySlug, getAllPosts, getPostByTag };
export type { Post, Field };
