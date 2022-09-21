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
  paginationBar: 'post-list__pagination-bar',
};

const PostList = ({ posts, currentPage, totalPages }: PostListProps) => {
  if (posts.length === 0) {
    return <></>;
  }

  const showPagination = currentPage && totalPages;

  return (
    <>
      <div className="list-article" data-test-id={postListTestIds.root}>
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} />
        ))}
      </div>

      {showPagination && (
        <div
          className="pagination-bar"
          data-test-id={postListTestIds.paginationBar}
        >
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </>
  );
};

export default PostList;
