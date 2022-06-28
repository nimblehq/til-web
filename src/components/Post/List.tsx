import classNames from 'classnames';

import Pagination from 'components/Pagination';
import { Post } from 'lib/post';

import PostCard from './Card';

interface PostListProps {
  posts: Post[];
  currentPage?: number;
  totalPages?: number;
  itemsRowWise?: boolean;
}

export const postListTestIds = {
  root: 'post-list',
};

const PostList = ({
  posts,
  currentPage,
  totalPages,
  itemsRowWise = false,
}: PostListProps) => {
  if (posts.length === 0) {
    return <></>;
  }

  const showPagination = currentPage && totalPages;

  return (
    <div
      className={classNames(
        { 'lg:flex-row': itemsRowWise },
        'flex flex-col flex-wrap items-center justify-between'
      )}
      data-test-id={postListTestIds.root}
    >
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} itemsRowWise={itemsRowWise} />
      ))}

      {showPagination && (
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      )}
    </div>
  );
};

export default PostList;
