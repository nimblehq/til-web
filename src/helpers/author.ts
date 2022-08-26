import { Author } from 'lib/post';

const getAvatarUrl = (author: Author, size = 128): string => {
  if (author.username) {
    return `https://github.com/${author.username}.png?size=${size}`;
  }

  return author.avatarUrl || '';
};

const getAuthorName = (author: Author): string => {
  return author.name || author.username || '';
};

export { getAvatarUrl, getAuthorName };
