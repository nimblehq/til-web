import classNames from 'classnames';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export const paginationTestIds = {
  root: 'pagination',
  prev: 'pagination__prev',
  next: 'pagination__next',
  page: 'pagination__page',
};

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  return (
    <nav
      className="flex justify-center btn-group m-4"
      data-test-id={paginationTestIds.root}
    >
      <Link href="/page/[page]" as={`/page/${currentPage - 1}`}>
        <button
          className={classNames('btn', { 'btn-disabled': currentPage <= 1 })}
          data-test-id={paginationTestIds.prev}
        >
          «
        </button>
      </Link>
      <button className="btn btn-ghost" data-test-id={paginationTestIds.page}>
        {currentPage}
      </button>
      <Link href="/page/[page]" as={`/page/${currentPage + 1}`}>
        <button
          className={classNames('btn', {
            'btn-disabled': currentPage >= totalPages,
          })}
          data-test-id={paginationTestIds.next}
        >
          »
        </button>
      </Link>
    </nav>
  );
};

export default Pagination;
