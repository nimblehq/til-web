import Pagination from 'components/Pagination';
import { Post } from 'lib/post';

import PostCard from './Card';

interface PostListProps {
  posts: Post[];
  currentPage: number;
  totalPages: number;
}

export const postListTestIds = {
  root: 'post-list',
};

const PostList = ({ posts, currentPage, totalPages }: PostListProps) => {
  if (posts.length === 0) {
    return <></>;
  }

  return (
    <div data-test-id={postListTestIds.root}>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default PostList;
