import { ParsedUrlQuery } from 'querystring';

import { ReactElement, useEffect } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from 'components/Layout';
import PostList from 'components/Post/List';
import { getPageTitle } from 'helpers/pageTitle';
import { getAllPosts, getPostsByTag, Post } from 'lib/post';

interface TagProps {
  tag: string;
  posts: Post[];
}

interface PathProps {
  params: { tag: string };
}

interface TagParams extends ParsedUrlQuery {
  tag: string;
}

export const tagDataTestIds = {
  heading: 'tag-heading',
};

const Tag = ({ tag, posts }: TagProps) => {
  useEffect(() => {
    document.querySelector('body')?.classList.add('category-archive');
  });

  return (
    <>
      <Head>
        <title>{getPageTitle(tag)}</title>
      </Head>

      <div className="category-container">
        <div className="category-headline">
          <h1
            className="category-headline__name"
            data-test-id={tagDataTestIds.heading}
          >
            {tag}
          </h1>
        </div>

        <PostList posts={posts} />
      </div>
    </>
  );
};

Tag.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Tag;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  // Get the paths we want to pre-render based on posts
  let paths: PathProps[] = [];
  posts.forEach((post) => {
    paths = post.tags.reduce(
      (allTags, tag) => [...allTags, { params: { tag } }],
      paths
    );
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { tag } = params as TagParams;
  const posts = getPostsByTag(tag);

  if (!posts) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { tag, posts },
  };
};
