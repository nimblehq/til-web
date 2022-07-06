import { render, screen } from '@testing-library/react';

import { Post } from 'lib/post';

import PostList, { postListTestIds } from './List';

describe('PostList', () => {
  describe('given no posts', () => {
    it('renders nothing', () => {
      render(<PostList posts={[]} currentPage={1} totalPages={1} />);
      const postList = screen.queryByTestId(postListTestIds.root);

      expect(postList).toBeNull();
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
          tags: ['tag1'],
        } as Post,
      ];

      render(<PostList posts={posts} currentPage={1} totalPages={1} />);

      const postList = screen.queryByTestId(postListTestIds.root);

      expect(postList).not.toBeEmptyDOMElement();
    });
  });
});
