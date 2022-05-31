import { render, screen } from '@testing-library/react';

import { postListTestIds } from 'components/Post/List';
import { BASIC_FIELDS, getAllPosts } from 'lib/post';
import Home, { homeDataTestIds } from 'pages/index.page';

describe('Home', () => {
  it('renders the heading', () => {
    const posts = getAllPosts(BASIC_FIELDS);

    render(<Home posts={posts} />);

    const heading = screen.getByTestId(homeDataTestIds.heading);

    expect(heading).toBeVisible();
  });

  it('renders the list of posts', () => {
    const posts = getAllPosts(BASIC_FIELDS);

    render(<Home posts={posts} />);

    const postList = screen.getByTestId(postListTestIds.root);

    expect(postList).toBeVisible();
  });
});
