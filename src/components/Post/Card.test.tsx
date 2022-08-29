import { render, screen } from '@testing-library/react';

import { Author, Post } from 'lib/post';

import PostCard, { postCardTestIds } from './Card';

describe('PostCard', () => {
  const post = {
    title: 'Post 1',
    slug: 'post-1',
    date: '2020-01-01',
    content: 'This is the first post',
    coverImage: '/public/images/post-1.jpg',
    author: {
      name: 'Admin',
      avatar: '/public/images/admin.jpg',
    } as Author,
    tags: ['tag1'],
  } as Post;

  it('renders the title', () => {
    render(<PostCard post={post} />);

    const title = screen.getByTestId(postCardTestIds.title);

    expect(title).toBeVisible();
    expect(title).toHaveTextContent('Post 1');
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

  describe('cover image', () => {
    describe('when there is a cover image', () => {
      it('renders the cover image', () => {
        render(<PostCard post={post} />);

        const image = screen.getByTestId(postCardTestIds.image);

        expect(image).toBeVisible();
        expect(image).toHaveAttribute('src');
      });
    });

    describe('when there is no cover image', () => {
      it('does not render the cover image', () => {
        const otherPost: Post = {
          ...post,
          coverImage: undefined,
        };

        render(<PostCard post={otherPost} />);

        const image = screen.queryByTestId(postCardTestIds.image);

        expect(image).not.toBeInTheDocument();
      });
    });
  });

  describe('description', () => {
    describe('given an excerpt', () => {
      it('renders the excerpt in the description', () => {
        const otherPost = {
          ...post,
          excerpt: 'This is the excerpt of the first post',
        };

        render(<PostCard post={otherPost} />);

        const description = screen.getByTestId(postCardTestIds.description);

        expect(description).toBeVisible();
        expect(description).toHaveTextContent(
          'This is the excerpt of the first post'
        );
      });
    });

    describe('given no excerpt', () => {
      it('renders the content in the description', () => {
        render(<PostCard post={post} />);

        const description = screen.queryByTestId(postCardTestIds.description);

        expect(description).toBeVisible();
        expect(description).toHaveTextContent('This is the first post');
      });
    });
  });

  it('renders the tags', () => {
    render(<PostCard post={post} />);

    const tags = screen.getByTestId(postCardTestIds.tags);

    expect(tags).toBeVisible();
    expect(tags).toHaveTextContent(post.tags[0]);
  });
});
