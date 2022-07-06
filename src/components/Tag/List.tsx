import Link from 'next/link';

interface TagListProps {
  tags: string[];
}

export const tagListTestIds = {
  root: 'tag-list',
};

const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className="self-center" data-test-id={tagListTestIds.root}>
      {tags.map((tag) => (
        <Link key={tag} href={`/tags/${tag}`}>
          <a href={`/tags/${tag}`}>
            <li className="badge badge-md mr-0.5">{tag}</li>
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default TagList;
