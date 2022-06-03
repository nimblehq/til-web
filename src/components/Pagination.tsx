import classNames from 'classnames';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <nav className="flex justify-center btn-group m-4">
      <Link href="/page/[page]" as={`/page/${currentPage - 1}`}>
        <button
          className={classNames('btn', { 'btn-disabled': currentPage <= 1 })}
        >
          «
        </button>
      </Link>
      <button className="btn btn-ghost">{currentPage}</button>
      <Link href="/page/[page]" as={`/page/${currentPage + 1}`}>
        <button
          className={classNames('btn', {
            'btn-disabled': currentPage >= totalPages,
          })}
        >
          »
        </button>
      </Link>
    </nav>
  );
};

export default Pagination;
