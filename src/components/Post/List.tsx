import { Post } from 'lib/post';

import PostCard from './Card';
import styles from './List.module.css';

interface PostListProps {
  posts: Post[];
}

export const postListTestIds = {
  root: 'post-list',
};

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={styles.listContainer} data-test-id={postListTestIds.root}>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
};

export default PostList;
