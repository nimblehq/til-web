import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from 'helpers/dateTime';
import { Post } from 'lib/post';

import styles from './Card.module.css';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className={styles.cardContainter}>
      <div className={styles.cardBody}>
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a href={`/posts/${post.slug}`}>
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <div className={styles.cardImage}>
              <Image
                src={post.coverImage}
                alt={post.title}
                width={480}
                height={320}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </a>
        </Link>
        <p className={styles.cardDescription}>{post.excerpt || post.content}</p>
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
                  />
                </div>
              </div>
              <div className={styles.cardAuthorName}>{post.author.name}</div>
              <time className={styles.cardDate} dateTime={post.date}>
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
