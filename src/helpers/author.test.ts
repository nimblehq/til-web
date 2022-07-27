import { Author } from 'lib/post';

import { getAuthorName, getAvatarUrl } from './author';

describe('Author helper', () => {
  describe('getAvatarUrl', () => {
    describe('when author has a username', () => {
      it('returns the GitHub avatar URL', () => {
        const username = 'james-d-kelly';
        const author: Author = {
          name: 'John Doe',
          username,
        };

        const avatarUrl = getAvatarUrl(author);

        expect(avatarUrl).toBe(
          `https://github.com/${author.username}.png?size=128`
        );
      });
    });

    describe('when author has an avatar', () => {
      it('returns the avatar URL', () => {
        const imageUrl =
          'https://avatars0.githubusercontent.com/u/12345?size=128';
        const author: Author = {
          name: 'John Doe',
          avatarUrl: imageUrl,
        };

        const avatarUrl = getAvatarUrl(author);

        expect(avatarUrl).toBe(imageUrl);
      });
    });

    describe('when author has neither a username nor an avatar', () => {
      it('returns an empty string', () => {
        const author: Author = {
          name: 'John Doe',
        };

        const avatarUrl = getAvatarUrl(author);

        expect(avatarUrl).toBe('');
      });
    });
  });

  describe('getAuthorName', () => {
    describe('when author has a name', () => {
      it('returns the name', () => {
        const name = 'John Doe';
        const author: Author = {
          name,
        };

        const authorName = getAuthorName(author);

        expect(authorName).toBe(name);
      });
    });

    describe('when author has a username', () => {
      it('returns the username', () => {
        const username = 'james-d-kelly';
        const author: Author = {
          username,
        };

        const authorName = getAuthorName(author);

        expect(authorName).toBe(username);
      });
    });

    describe('when author has neither a name nor a username', () => {
      it('returns an empty string', () => {
        const author: Author = {};

        const authorName = getAuthorName(author);

        expect(authorName).toBe('');
      });
    });

    describe('when author has both a name and a username', () => {
      it('returns the name', () => {
        const name = 'John Doe';
        const username = 'james-d-kelly';
        const author: Author = {
          name,
          username,
        };

        const authorName = getAuthorName(author);

        expect(authorName).toBe(name);
      });
    });
  });
});
