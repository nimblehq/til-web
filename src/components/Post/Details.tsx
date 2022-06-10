import Image from 'next/image';

import { formatDate } from 'helpers/dateTime';
import { Post } from 'lib/post';

interface PostDetailsProps {
  post: Post;
}

export const postDetailsTestIds = {
  root: 'post-details',
  title: 'post-details__title',
  description: 'post-details__description',
  image: 'post-details__image',
  authorName: 'post-details__author-name',
  authorAvatar: 'post-details__author-avatar',
  date: 'post-details__date',
  tags: 'post-details__tags',
};

const PostDetails = ({ post }: PostDetailsProps) => {
  return (
    <div
      className="card bg-base-200 shadow-xl my-8 rounded-lg"
      data-test-id={postDetailsTestIds.root}
    >
      <div className="px-8 pt-8 pb-4">
        <h2
          className="text-2xl font-bold text-center"
          data-test-id={postDetailsTestIds.title}
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
            data-test-id={postDetailsTestIds.image}
          />
        </div>
        <p data-test-id={postDetailsTestIds.description}>{post.content}</p>
        <div className="flex justify-between mt-4">
          <div>{post.tags.join(', ')}</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full"
                layout="fixed"
                data-test-id={postDetailsTestIds.authorAvatar}
              />
            </div>
            <div
              className="text-sm font-semibold"
              data-test-id={postDetailsTestIds.authorName}
            >
              {post.author.name}
            </div>
            <time
              className="text-sm"
              dateTime={post.date}
              data-test-id={postDetailsTestIds.date}
            >
              {formatDate(post.date)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
