import { render, screen } from '@testing-library/react';

import { Post } from 'lib/post';

import PostCard, { postCardTestIds } from './Card';

describe('PostCard', () => {
  let post = {
    title: 'Post 1',
    slug: 'post-1',
    date: '2020-01-01',
    content: 'This is the first post',
    coverImage: '/public/images/post-1.jpg',
    author: {
      name: 'Admin',
      avatar: '/public/images/admin.jpg',
    },
  } as Post;

  it('renders the title', () => {
    render(<PostCard post={post} />);

    const title = screen.getByTestId(postCardTestIds.title);

    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Post 1');
  });

  it('renders the image cover', () => {
    render(<PostCard post={post} />);

    const image = screen.getByTestId(postCardTestIds.image);

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src');
  });

  it('renders the author info', () => {
    render(<PostCard post={post} />);

    const authorName = screen.getByTestId(postCardTestIds.authorName);
    const authorAvatar = screen.getByTestId(postCardTestIds.authorAvatar);

    expect(authorName).toBeVisible();
    expect(authorName).toHaveTextContent('Admin');
    expect(authorAvatar).toBeVisible();
    expect(authorAvatar).toHaveAttribute('src');
  });

  it('renders the date', () => {
    render(<PostCard post={post} />);

    const date = screen.getByTestId(postCardTestIds.date);

    expect(date).toBeVisible();
    expect(date).toHaveTextContent('January 1, 2020');
  });

  describe('description', () => {
    describe('given an excerpt', () => {
      it('renders the excerpt in the description', () => {
        const otherPost = {
          ...post,
          excerpt: 'This is the excerp of the first post',
        };

        render(<PostCard post={otherPost} />);

        const description = screen.getByTestId(postCardTestIds.description);

        expect(description).toBeVisible();
        expect(description).toHaveTextContent(
          'This is the excerp of the first post'
        );
      });
    });

    describe('given no excerpt', () => {
      it('renders the content in the description', () => {
        post = {
          ...post,
        };

        render(<PostCard post={post} />);

        const description = screen.queryByTestId(postCardTestIds.description);

        expect(description).toBeVisible();
        expect(description).toHaveTextContent('This is the first post');
      });
    });
  });
});
