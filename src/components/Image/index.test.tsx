import { render, screen } from '@testing-library/react';

import Image from '.';

describe('Image', () => {
  it('renders the image properly', () => {
    render(
      <Image
        src="https://picsum.photos/200/300"
        alt="Image"
        data-test-id="image"
        layout="fill"
      />
    );

    const imageElement = screen.getByTestId('image');

    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute('src');
    expect(imageElement).toHaveAttribute('alt');
  });
});
