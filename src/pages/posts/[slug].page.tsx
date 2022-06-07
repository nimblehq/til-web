import { ParsedUrlQuery } from 'querystring';

import { ReactElement } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from 'components/Layout';
import { getPageTitle } from 'helpers/pageTitle';
import {
  BASIC_FIELDS,
  EXTENDED_FIELDS,
  getAllPosts,
  getPostBySlug,
  Post,
} from 'lib/post';

interface PostProps {
  post: Post;
}

interface PostParams extends ParsedUrlQuery {
  slug: string;
}

export const postDetailsTestIds = {
  title: 'post-details__title',
};

const PostDetails = ({ post }: PostProps) => {
  return (
    <>
      <Head>
        <title>{getPageTitle(post.title)}</title>
      </Head>

      <h1
        className="m-8 text-7xl items-center text-center"
        data-test-id={postDetailsTestIds.title}
      >
        {post.title}
      </h1>
    </>
  );
};

PostDetails.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default PostDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(BASIC_FIELDS);

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as PostParams;
  const post = getPostBySlug(slug, EXTENDED_FIELDS);

  return {
    props: { post },
  };
};
