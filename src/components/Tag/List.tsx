import Link from 'next/link';

interface TagListProps {
  tags: string[];
}

export const tagListTestIds = {
  root: 'tag-list',
};

const TagList = ({ tags }: TagListProps) => {
  return (
    <div data-test-id={tagListTestIds.root}>
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`}>
          <a href={`/tags/${tag}`}>
            <span className="badge badge-md mr-0.5">{tag}</span>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TagList;
