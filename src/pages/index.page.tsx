import { ReactElement } from 'react';

import { GetStaticProps } from 'next';

import Home from 'components/Home';
import Layout from 'components/Layout';
import { getPaginationData } from 'helpers/pagination';
import { getAllPosts, Post } from 'lib/post';

interface HomeProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

const HomePage = ({ posts, currentPage, totalPages }: HomeProps) => {
  return (
    <Home posts={posts} currentPage={currentPage} totalPages={totalPages} />
  );
};

HomePage.getLayout = (page: ReactElement) => <Layout>{page}</Layout>;

export default HomePage;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  const { paginatedItems, totalPages } = getPaginationData(posts);

  return {
    props: { posts: paginatedItems, currentPage: 1, totalPages },
  };
};
