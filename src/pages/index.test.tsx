import { render, screen } from '@testing-library/react';

import { BASIC_FIELDS, getAllPosts } from 'lib/post';
import Home, { homeDataTestIds } from 'pages/index.page';

describe('Home', () => {
  it('renders a heading', () => {
    const posts = getAllPosts(BASIC_FIELDS);

    render(<Home posts={posts} />);

    const heading = screen.getByTestId(homeDataTestIds.heading);

    expect(heading).toBeVisible();
  });
});
