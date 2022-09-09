import Link from 'next/link';

interface TagListProps {
  tags: string[];
}

export const tagListTestIds = {
  root: 'tag-list',
};

const TagList = ({ tags, ...props }: TagListProps) => {
  if (!tags.length) {
    return null;
  }

  return (
    <div
      className="card-article__tag"
      data-test-id={tagListTestIds.root}
      {...props}
    >
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`}>
          <a href={`/tags/${tag}`} className="card-article__tag-item">
            {tag}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TagList;
