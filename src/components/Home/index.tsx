import { useEffect } from 'react';

import Head from 'next/head';

import PostList from 'components/Post/List';
import { getPageTitle } from 'helpers/pageTitle';
import { Post } from 'lib/post';

interface HomeProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

export const homeDataTestIds = {
  root: 'home',
  heading: 'home-heading',
};

const Home = ({ posts, currentPage, totalPages }: HomeProps) => {
  useEffect(() => {
    document.querySelector('body')?.classList.add('home');
  });

  const title = currentPage !== 1 ? `Page ${currentPage}` : '';

  return (
    <>
      <Head>
        <title>{getPageTitle(title)}</title>
      </Head>

      <div className="article-container" data-test-id={homeDataTestIds.root}>
        <h1 className="hidden" data-test-id={homeDataTestIds.heading}>
          TIL
        </h1>

        <PostList
          posts={posts}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </>
  );
};

export default Home;
