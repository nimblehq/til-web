import Link from 'next/link';

import Image from 'components/Image';
import TagList from 'components/Tag/List';
import { getAuthorName, getAvatarUrl } from 'helpers/author';
import { formatDate } from 'helpers/dateTime';
import { Post } from 'lib/post';

interface PostCardProps {
  post: Post;
  itemsRowWise?: boolean;
}

export const postCardTestIds = {
  root: 'post-card',
  link: 'post-card__link',
  title: 'post-card__title',
  description: 'post-card__description',
  image: 'post-card__image',
  authorName: 'post-card__author-name',
  authorAvatar: 'post-card__author-avatar',
  date: 'post-card__date',
  tags: 'post-card__tags',
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="card-article">
      {post.coverImage && (
        <div className="card-article__cover">
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a
              className="card-article__cover-link"
              href={`/posts/${post.slug}`}
              data-test-id={postCardTestIds.link}
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                width={245}
                height={122}
                className="card-article__cover-image"
                data-test-id={postCardTestIds.image}
              />
            </a>
          </Link>
        </div>
      )}
      <h2
        className="card-article__headline"
        data-test-id={postCardTestIds.title}
      >
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a
            className="card-article__headline-link"
            href={`/posts/${post.slug}`}
            data-test-id={postCardTestIds.link}
          >
            {post.title}
          </a>
        </Link>
      </h2>
      <div
        className="card-article__description"
        data-test-id={postCardTestIds.description}
      >
        {post.excerpt || post.content}
      </div>
      <div className="card-article__footer">
        <div className="card-article__avatar">
          <Image
            src={getAvatarUrl(post.author, 40)}
            alt={getAuthorName(post.author)}
            className="card-article__avatar-image"
            width={40}
            height={40}
            data-test-id={postCardTestIds.authorAvatar}
          />
        </div>
        <div
          className="card-article__author"
          data-test-id={postCardTestIds.authorName}
        >
          {getAuthorName(post.author)}
        </div>
        <div
          className="card-article__timestamp"
          data-test-id={postCardTestIds.date}
        >
          {formatDate(post.date)}
        </div>
        <TagList
          tags={post.tags}
          customClass="card-article"
          data-test-id={postCardTestIds.tags}
        />
      </div>
    </div>
  );
};

export default PostCard;
