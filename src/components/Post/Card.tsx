import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from 'helpers/dateTime';
import { Post } from 'lib/post';

import styles from './Card.module.css';

interface PostCardProps {
  post: Post;
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
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className={styles.cardContainter} data-test-id={postCardTestIds.root}>
      <div className={styles.cardBody}>
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a href={`/posts/${post.slug}`} data-test-id={postCardTestIds.link}>
            <h2
              className={styles.cardTitle}
              data-test-id={postCardTestIds.title}
            >
              {post.title}
            </h2>
            <div className={styles.cardImage}>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={480}
                height={320}
                layout="responsive"
                objectFit="contain"
                data-test-id={postCardTestIds.image}
              />
            </div>
          </a>
        </Link>
        <p
          className={styles.cardDescription}
          data-test-id={postCardTestIds.description}
        >
          {post.excerpt || post.content}
        </p>
        <div className={styles.cardFooter}>
          <div className={styles.cardFooterRight}>
            <div className={styles.cardAuthor}>
              <div className={styles.cardAvatarContainer}>
                <div className={styles.cardAvatar}>
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={12}
                    height={12}
                    layout="responsive"
                    objectFit="contain"
                    data-test-id={postCardTestIds.authorAvatar}
                  />
                </div>
              </div>
              <div
                className={styles.cardAuthorName}
                data-test-id={postCardTestIds.authorName}
              >
                {post.author.name}
              </div>
              <time
                className={styles.cardDate}
                dateTime={post.date}
                data-test-id={postCardTestIds.date}
              >
                {formatDate(post.date)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
