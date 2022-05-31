import { ReactElement } from 'react';

import Layout from 'components/Layout';
import PostList from 'components/Post/List';
import { getPaginationData } from 'helpers/pagination';
import { BASIC_FIELDS, getAllPosts, Post } from 'lib/post';

import styles from './index.module.css';

interface HomeProps {
  posts: Post[];
}

export const homeDataTestIds = {
  heading: 'home-heading',
};

const Home = ({ posts }: HomeProps) => {
  return (
    <>
      <h1 className={styles.homeHeading} data-test-id={homeDataTestIds.heading}>
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
