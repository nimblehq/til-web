import Link from 'next/link';

interface TagListProps {
  tags: string[];
  customClass?: string;
}

export const tagListTestIds = {
  root: 'tag-list',
};

const TagList = ({ tags, customClass, ...props }: TagListProps) => {
  if (!tags.length) {
    return null;
  }

  return (
    <div
      className={`${customClass}__tag`}
      data-test-id={tagListTestIds.root}
      {...props}
    >
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`}>
          <a href={`/tags/${tag}`} className={`${customClass}__tag-item`}>
            {tag}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default TagList;
