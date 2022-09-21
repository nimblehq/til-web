import Image from 'components/Image';
import TagList from 'components/Tag/List';
import { getAuthorName, getAvatarUrl } from 'helpers/author';
import { formatDate } from 'helpers/dateTime';
import { Post } from 'lib/post';

import Content from './Content';

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
    <article className="til-article" data-test-id={postDetailsTestIds.root}>
      <div className="til-article__cover">
        <div className="card-article-cover">
          {post.coverImage && (
            <figure className="card-article-cover__image-container">
              <Image
                src={post.coverImage}
                alt={post.title}
                width="640"
                height="360"
                layout="responsive"
                objectFit="contain"
                className="card-article-cover__image"
                data-test-id={postDetailsTestIds.image}
              />
            </figure>
          )}
          <h1
            className="card-article-cover__title"
            data-test-id={postDetailsTestIds.title}
          >
            {post.title}
          </h1>
          <div className="card-article-cover__footer">
            <div className="card-article-cover__avatar">
              <Image
                src={getAvatarUrl(post.author)}
                alt={getAuthorName(post.author)}
                width={32}
                height={32}
                className="card-article-cover__avatar-image"
                data-test-id={postDetailsTestIds.authorAvatar}
              />
            </div>
            <div
              className="card-article-cover__author"
              data-test-id={postDetailsTestIds.authorName}
            >
              {getAuthorName(post.author)}
            </div>
            <div
              className="card-article-cover__timestamp"
              data-test-id={postDetailsTestIds.date}
            >
              {formatDate(post.date)}
            </div>
            <TagList
              tags={post.tags}
              customClass="card-article-cover"
              data-test-id={postDetailsTestIds.tags}
            />
          </div>
        </div>
      </div>
      <div className="article-content til-article__content">
        <Content>{post.content}</Content>
      </div>
      <section className="til-article__sidebar"></section>
    </article>
  );
};

export default PostDetails;
