import { render, screen } from '@testing-library/react';

import { BASIC_FIELDS, getAllPosts } from 'lib/post';

import PostDetails, { postDetailsTestIds } from './[slug].page';

describe('PostDetails', () => {
  it('renders the title', () => {
    const posts = getAllPosts(BASIC_FIELDS);
    const post = posts[0];

    render(<PostDetails post={post} />);

    const title = screen.getByTestId(postDetailsTestIds.title);

    expect(title).toBeVisible();
    expect(title).toHaveTextContent(post.title);
  });
});
