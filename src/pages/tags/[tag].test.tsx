import { render, screen } from '@testing-library/react';

import { postListTestIds } from 'components/Post/List';
import { getAllPosts } from 'lib/post';

import Tag, { tagDataTestIds } from './[tag].page';

describe('Tag', () => {
  it('renders the heading', () => {
    const posts = getAllPosts();
    const tag = posts[0].tags[0];

    render(<Tag tag={tag} posts={posts} />);

    const heading = screen.getByTestId(tagDataTestIds.heading);

    expect(heading).toBeVisible();
  });

  describe('TagList', () => {
    describe('when there are no tags', () => {
      it('does NOT render the list', () => {
        render(<Tag tag="" posts={[]} />);

        const postList = screen.queryByTestId(postListTestIds.root);

        expect(postList).not.toBeInTheDocument();
      });
    });

    describe('when there are tags', () => {
      it('renders the list', () => {
        const posts = getAllPosts();
        const tag = posts[0].tags[0];

        render(<Tag tag={tag} posts={posts} />);

        const postList = screen.getByTestId(postListTestIds.root);

        expect(postList).toBeVisible();
      });
    });
  });
});
