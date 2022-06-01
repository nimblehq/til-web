import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from 'helpers/dateTime';
import { Post } from 'lib/post';

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
    <div
      className="card bg-base-200 shadow-xl my-8 rounded-lg"
      data-test-id={postCardTestIds.root}
    >
      <div className="px-8 pt-8 pb-4">
        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
          <a href={`/posts/${post.slug}`} data-test-id={postCardTestIds.link}>
            <h2
              className="text-2xl font-bold text-center hover:text-primary"
              data-test-id={postCardTestIds.title}
            >
              {post.title}
            </h2>
            <div className="m-auto max-w-sm">
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
        <p data-test-id={postCardTestIds.description}>
          {post.excerpt || post.content}
        </p>
        <div className="flex flex-row mt-4">
          <div className="ml-auto">
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="w-8 rounded-full">
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
                className="text-sm font-semibold"
                data-test-id={postCardTestIds.authorName}
              >
                {post.author.name}
              </div>
              <time
                className="text-sm"
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
