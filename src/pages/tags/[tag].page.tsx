import { ParsedUrlQuery } from 'querystring';

import { ReactElement } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from 'components/Layout';
import PostList from 'components/Post/List';
import { getPageTitle } from 'helpers/pageTitle';
import { getPaginationData } from 'helpers/pagination';
import { getAllPosts, getPostByTag, Post } from 'lib/post';

interface TagProps {
  tag: string;
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

interface TagParams extends ParsedUrlQuery {
  tag: string;
}

export const tagDataTestIds = {
  heading: 'tag-heading',
};

const Tag = ({ tag, posts, currentPage, totalPages }: TagProps) => {
  return (
    <>
      <Head>
        <title>{getPageTitle(tag)}</title>
      </Head>

      <h1
        className="m-8 text-7xl items-center text-center"
        data-test-id={tagDataTestIds.heading}
      >
        Posts with {tag} tag
      </h1>

      <PostList
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

Tag.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Tag;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

  // Get the paths we want to pre-render based on posts
  let paths: { params: { tag: string } }[] = [];
  posts.forEach((post) => {
    paths = post.tags.reduce(
      (allTags: { params: { tag: string } }[], tag) => [
        ...allTags,
        { params: { tag } },
      ],
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
  const posts = getPostByTag(tag);
  const { paginatedItems, totalPages } = getPaginationData(posts);

  return {
    props: { tag, posts: paginatedItems, currentPage: 1, totalPages },
  };
};
