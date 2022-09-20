import { render, screen } from '@testing-library/react';

import { postDetailsTestIds } from 'components/Post/Details';
import { getAllPosts } from 'lib/post';

import PostDetails from './[slug].page';

describe('PostDetails', () => {
  it('renders PostDetails component', () => {
    const posts = getAllPosts();
    const post = posts[0];

    render(<PostDetails post={post} />);

    const postDetailsComponent = screen.getByTestId(postDetailsTestIds.root);

    expect(postDetailsComponent).toBeInTheDocument();
  });
});
