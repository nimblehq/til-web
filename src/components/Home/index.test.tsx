import { render, screen } from '@testing-library/react';

import { postListTestIds } from 'components/Post/List';
import { getAllPosts } from 'lib/post';

import Home, { homeDataTestIds } from '.';

describe('Home', () => {
  it('renders the heading', () => {
    const posts = getAllPosts();

    render(<Home posts={posts} currentPage={1} totalPages={1} />);

    const heading = screen.getByTestId(homeDataTestIds.heading);

    expect(heading).toBeVisible();
  });

  describe('PostList', () => {
    describe('when there are posts', () => {
      it('renders the list', () => {
        const posts = getAllPosts();

        render(<Home posts={posts} currentPage={1} totalPages={1} />);

        const postList = screen.getByTestId(postListTestIds.root);

        expect(postList).toBeVisible();
      });
    });

    describe('when there are NO posts', () => {
      it('does NOT render the list', () => {
        render(<Home posts={[]} currentPage={1} totalPages={1} />);

        const postList = screen.queryByTestId(postListTestIds.root);

        expect(postList).not.toBeInTheDocument();
      });
    });
  });
});
