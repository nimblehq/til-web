import { render, screen } from '@testing-library/react';

import TagList, { tagListTestIds } from './List';

describe('TagList', () => {
  it('renders the tags', () => {
    const tags = ['tag1'];

    render(<TagList tags={tags} />);

    const tagList = screen.queryByTestId(tagListTestIds.root);

    expect(tagList).toBeVisible();
    expect(tagList).toHaveTextContent(tags[0]);
  });
});
