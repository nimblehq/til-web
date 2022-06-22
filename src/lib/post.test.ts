import { getAllPosts, getPostBySlug } from './post';

describe('post', () => {
  describe('getPostBySlug', () => {
    describe('given a valid slug', () => {
      it('returns a post', () => {
        const posts = getAllPosts();
        const post = getPostBySlug(posts[0].slug);

        expect(typeof post).toBe('object');
        expect(post.slug).toBe(posts[0].slug);
      });
    });

    describe('given an invalid slug', () => {
      it('returns an empty object', () => {
        const post = getPostBySlug('invalid');

        expect(typeof post).toBe('object');
        expect(Object.keys(post)).toHaveLength(0);
      });
    });
  });

  describe('getAllPosts', () => {
    it('returns an array of posts', () => {
      const posts = getAllPosts();

      expect(Array.isArray(posts)).toBe(true);
      expect(posts.length).toBeGreaterThan(0);
      expect(typeof posts[0]).toBe('object');
    });
  });
});
