import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { useRouter } from 'next/router';

import RandomButton, { postRandomButtonTestIds } from './RandomButton';

jest.mock('axios');
jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('RandomButton', () => {
  it('renders the button', () => {
    render(<RandomButton />);

    const randomButton = screen.getByTestId(postRandomButtonTestIds.root);

    expect(randomButton).toBeVisible();
  });

  describe('when clicked', () => {
    const mockPush = jest.fn();

    beforeEach(() => {
      (useRouter as jest.Mock).mockImplementation(() => ({
        push: mockPush,
      }));
    });

    describe('and the returned slug is NOT empty', () => {
      it('redirects to a random post', async () => {
        const user = userEvent.setup();
        const response = {
          data: {
            slug: 'example',
          },
        };
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.post.mockResolvedValueOnce(response);

        render(<RandomButton />);

        const randomButton = screen.getByTestId(postRandomButtonTestIds.root);
        await user.click(randomButton);

        expect(mockPush).toHaveBeenCalledWith('/posts/example');
      });
    });

    describe('and the returned slug is empty', () => {
      it('redirects to the home page', async () => {
        const user = userEvent.setup();
        const response = {
          data: {
            slug: '',
          },
        };
        const mockedAxios = axios as jest.Mocked<typeof axios>;
        mockedAxios.post.mockResolvedValueOnce(response);

        render(<RandomButton />);

        const randomButton = screen.getByTestId(postRandomButtonTestIds.root);
        await user.click(randomButton);

        expect(mockPush).toHaveBeenCalledWith('/');
      });
    });
  });
});
