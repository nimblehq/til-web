import { ParsedUrlQuery } from 'querystring';

import { ReactElement, useEffect } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from 'components/Layout';
import PostDetails from 'components/Post/Details';
import { getPageTitle } from 'helpers/pageTitle';
import { getAllPosts, getPostBySlug, Post } from 'lib/post';

interface PostProps {
  post: Post;
}

interface PostParams extends ParsedUrlQuery {
  slug: string;
}

const PostDetailsPage = ({ post }: PostProps) => {
  useEffect(() => {
    document.querySelector('body')?.classList.add('article');
  });

  return (
    <>
      <Head>
        <title>{getPageTitle(post.title)}</title>
      </Head>

      <PostDetails post={post} />
    </>
  );
};

PostDetailsPage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default PostDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();

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
  const post = getPostBySlug(slug);

  return {
    props: { post },
  };
};
