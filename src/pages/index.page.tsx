import { ReactElement } from 'react';

import Head from 'next/head';

import Layout from 'components/Layout';
import PostList from 'components/Post/List';
import { getPageTitle } from 'helpers/pageTitle';
import { getPaginationData } from 'helpers/pagination';
import { BASIC_FIELDS, getAllPosts, Post } from 'lib/post';

interface HomeProps {
  posts: Post[];
}

export const homeDataTestIds = {
  heading: 'home-heading',
};

const Home = ({ posts }: HomeProps) => {
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

      <PostList posts={posts} />
    </>
  );
};

Home.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default Home;

export const getStaticProps = async () => {
  const posts = getAllPosts(BASIC_FIELDS);
  const { paginatedItems } = getPaginationData(posts, 1);

  return {
    props: { posts: paginatedItems },
  };
};
