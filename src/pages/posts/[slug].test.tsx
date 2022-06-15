import { render, screen } from '@testing-library/react';

import { POST_FIELDS, getAllPosts } from 'lib/post';

import PostDetails, { postDetailsTestIds } from './[slug].page';

describe('PostDetails', () => {
  it('renders a home link', () => {
    const posts = getAllPosts(POST_FIELDS);
    const post = posts[0];

    render(<PostDetails post={post} />);

    const homePageLink = screen.getByTestId(postDetailsTestIds.homePageLink);

    expect(homePageLink).toBeVisible();
    expect(homePageLink).toHaveTextContent('TIL');
  });
});
