import { render, screen } from '@testing-library/react';

import { getAllPosts } from 'lib/post';

import PostDetails, { postDetailsTestIds } from './[slug].page';

describe('PostDetails', () => {
  it('renders a home link', () => {
    const posts = getAllPosts();
    const post = posts[0];

    render(<PostDetails post={post} />);

    const homePageLink = screen.getByTestId(postDetailsTestIds.homePageLink);

    expect(homePageLink).toBeVisible();
    expect(homePageLink).toHaveTextContent('TIL');
  });
});
