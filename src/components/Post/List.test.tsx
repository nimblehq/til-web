import { render, screen } from '@testing-library/react';

import { Post } from 'lib/post';

import PostList, { postListTestIds } from './List';

describe('PostList', () => {
  describe('given no posts', () => {
    it('renders nothing', () => {
      render(<PostList posts={[]} />);
      const postList = screen.queryByTestId(postListTestIds.root);

      expect(postList).toBeEmptyDOMElement();
    });
  });

  describe('given posts', () => {
    it('renders the posts', () => {
      const posts = [
        {
          title: 'Post 1',
          slug: 'post-1',
          date: '2020-01-01',
          excerpt: 'This is the first post',
          coverImage: '/public/images/post-1.jpg',
          author: {
            name: 'Admin',
            avatar: '/public/images/admin.jpg',
          },
        } as Post,
      ];

      render(<PostList posts={posts} />);

      const postList = screen.queryByTestId(postListTestIds.root);

      expect(postList).not.toBeEmptyDOMElement();
    });
  });
});
