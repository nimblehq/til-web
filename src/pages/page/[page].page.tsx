import { ParsedUrlQuery } from 'querystring';

import { ReactElement } from 'react';

import { GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from 'components/Layout';
import PostList from 'components/Post/List';
import { getPageTitle } from 'helpers/pageTitle';
import { getPaginationData } from 'helpers/pagination';
import { BASIC_FIELDS, getAllPosts, Post } from 'lib/post';

interface HomeProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

export const homeDataTestIds = {
  heading: 'home-heading',
};

const Page = ({ posts, currentPage, totalPages }: HomeProps) => {
  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
      </Head>

      <h1
        className="m-8 text-7xl items-center text-center"
        data-test-id={homeDataTestIds.heading}
      >
        TIL
      </h1>

      <PostList
        posts={posts}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

Page.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Page;

interface IParams extends ParsedUrlQuery {
  page: string;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = params as IParams;
  const currentPage = parseInt(page, 10);
  if (isNaN(currentPage)) {
    throw new Error('Invalid page number');
  }

  const posts = getAllPosts(BASIC_FIELDS);
  const { paginatedItems, totalPages } = getPaginationData(posts, currentPage);

  return {
    props: { posts: paginatedItems, currentPage, totalPages },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(BASIC_FIELDS);
  const { totalPages } = getPaginationData(posts);
  const paths = [];

  for (let page = 1; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } });
  }

  return {
    paths,
    fallback: false,
  };
};
