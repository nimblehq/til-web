import { render, screen } from '@testing-library/react';

import { homeDataTestIds } from 'components/Home';
import { getAllPosts } from 'lib/post';

import HomePage from './index.page';

describe('Home page', () => {
  it('renders Home component', () => {
    const posts = getAllPosts();

    render(<HomePage posts={posts} currentPage={1} totalPages={1} />);

    const homeComponent = screen.getByTestId(homeDataTestIds.root);

    expect(homeComponent).toBeVisible();
  });
});
