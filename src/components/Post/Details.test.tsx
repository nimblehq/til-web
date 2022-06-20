import { render, screen } from '@testing-library/react';

import { Post } from 'lib/post';

import PostDetails, { postDetailsTestIds } from './Details';

describe('PostDetails', () => {
  const post = {
    title: 'Post 1',
    slug: 'post-1',
    date: '2020-01-01',
    content: 'This is the first post',
    coverImage: '/public/images/post-1.jpg',
    author: {
      name: 'Admin',
      avatar: '/public/images/admin.jpg',
    },
    tags: ['tag1'],
  } as Post;

  it('renders the title', () => {
    render(<PostDetails post={post} />);

    const title = screen.getByTestId(postDetailsTestIds.title);

    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Post 1');
  });

  it('renders the image cover', () => {
    render(<PostDetails post={post} />);

    const image = screen.getByTestId(postDetailsTestIds.image);

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src');
  });

  it('renders the author info', () => {
    render(<PostDetails post={post} />);

    const authorName = screen.getByTestId(postDetailsTestIds.authorName);
    const authorAvatar = screen.getByTestId(postDetailsTestIds.authorAvatar);

    expect(authorName).toBeVisible();
    expect(authorName).toHaveTextContent('Admin');
    expect(authorAvatar).toBeVisible();
    expect(authorAvatar).toHaveAttribute('src');
  });

  it('renders the date', () => {
    render(<PostDetails post={post} />);

    const date = screen.getByTestId(postDetailsTestIds.date);

    expect(date).toBeVisible();
    expect(date).toHaveTextContent('January 1, 2020');
  });

  it('renders the contents in the description', () => {
    render(<PostDetails post={post} />);

    const description = screen.getByTestId(postDetailsTestIds.description);

    expect(description).toBeVisible();
    expect(description).toHaveTextContent(post.content);
  });

  it('renders the tags', () => {
    render(<PostDetails post={post} />);

    const tags = screen.getByTestId(postDetailsTestIds.tags);

    expect(tags).toBeVisible();
    expect(tags).toHaveTextContent(post.tags[0]);
  });
});
