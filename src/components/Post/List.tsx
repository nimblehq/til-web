import { Post } from 'lib/post';

import PostCard from './Card';
import styles from './List.module.css';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  return (
    <div className={styles.listContainer}>
      {posts.map((post) => (
        <PostCard post={post} key={post.slug} />
      ))}
    </div>
  );
};

export default PostList;
