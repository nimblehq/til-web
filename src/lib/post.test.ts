import {
  getAllPosts,
  getPostBySlug,
  randomPostSlug,
  getPostSlugs,
} from './post';

describe('post', () => {
  describe('getPostSlugs', () => {
    it('returns an array of slugs', () => {
      const slugs = getPostSlugs();

      expect(Array.isArray(slugs)).toBe(true);
      expect(slugs.length).toBeGreaterThan(0);
      expect(typeof slugs[0]).toBe('string');
    });
  });

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

  describe('randomPostSlug', () => {
    describe('when there is NO saved slugs', () => {
      it('returns the random slug', () => {
        const slug = randomPostSlug();
        const postSlugs = getPostSlugs();

        expect(typeof slug).toBe('string');
        expect(postSlugs).toContain(slug);
      });
    });

    describe('when there are saved slugs', () => {
      describe('when the saved slugs are NOT all in the post slugs', () => {
        it('returns the random slug', () => {
          const postSlugs = getPostSlugs();
          const slug = randomPostSlug([postSlugs[0]]);

          expect(typeof slug).toBe('string');
          expect(postSlugs).toContain(slug);
          expect(slug).not.toBe(postSlugs[0]);
        });
      });

      describe('when the saved slugs are ALL in the post slugs', () => {
        it('does NOT return slug', () => {
          const postSlugs = getPostSlugs();
          const slug = randomPostSlug(postSlugs);

          expect(slug).toBeNull();
        });
      });
    });
  });
});
