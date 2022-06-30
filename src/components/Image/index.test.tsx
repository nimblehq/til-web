import { render } from '@testing-library/react';

import Image from '.';

describe('Image', () => {
  it('renders the image properly', () => {
    const { container } = render(
      <Image src="https://picsum.photos/200/300" alt="test" layout="fill" />
    );

    expect(container).toMatchSnapshot();
  });
});
