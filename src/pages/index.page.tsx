import { ReactElement } from 'react';

import Layout from 'components/Layout';
import PostList from 'components/Post/List';
import { getPaginationData } from 'helpers/pagination';
import { BASIC_FIELDS, getAllPosts, Post } from 'lib/post';

import styles from './index.module.css';

export const homeDataTestIds = {
  heading: 'home-heading',
};

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts }: HomeProps) => {
  return (
    <div className={styles.homeContainer}>
      <PostList posts={posts} />
    </div>
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
