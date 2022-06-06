import { render, screen } from '@testing-library/react';

import { postListTestIds } from 'components/Post/List';
import { BASIC_FIELDS, getAllPosts } from 'lib/post';
import Page, { pageDataTestIds } from 'pages/page/[page].page';

describe('Page', () => {
  it('renders the heading', () => {
    const posts = getAllPosts(BASIC_FIELDS);

    render(<Page posts={posts} currentPage={1} totalPages={1} />);

    const heading = screen.getByTestId(pageDataTestIds.heading);

    expect(heading).toBeVisible();
  });

  describe('PostList', () => {
    describe('when there are no posts', () => {
      it('does not render the list', () => {
        render(<Page posts={[]} currentPage={1} totalPages={1} />);

        const postList = screen.queryByTestId(postListTestIds.root);

        expect(postList).not.toBeInTheDocument();
      });
    });

    describe('when there are posts', () => {
      it('renders the list', () => {
        const posts = getAllPosts(BASIC_FIELDS);

        render(<Page posts={posts} currentPage={1} totalPages={1} />);

        const postList = screen.getByTestId(postListTestIds.root);

        expect(postList).toBeVisible();
      });
    });
  });
});
