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
  if (totalPages === 1) {
    return <></>;
  }

  return (
    <nav className="navigation" data-test-id={paginationTestIds.root}>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="pagination__page">
            <Link href="/page/[page]" as={`/page/${currentPage - 1}`} passHref>
              <a
                href={`/page/${currentPage - 1}`}
                className="pagination__link"
                data-test-id={paginationTestIds.prev}
              >
                {'<'}
              </a>
            </Link>
          </li>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isCurrentPage = page === currentPage;

          switch (true) {
            case isCurrentPage:
              return (
                <li
                  key={page}
                  className="pagination__page"
                  data-test-id={`${paginationTestIds.page}-${page}`}
                >
                  <span className="pagination__text">{page}</span>
                </li>
              );

            case page === 1:
              return (
                <li key={page} className="pagination__page">
                  <Link href="/" passHref>
                    <a
                      href="/"
                      className="pagination__link"
                      data-test-id={`${paginationTestIds.page}-${page}`}
                    >
                      {page}
                    </a>
                  </Link>
                </li>
              );

            default:
              return (
                <li key={page} className="pagination__page">
                  <Link href="/page/[page]" as={`/page/${page}`} passHref>
                    <a
                      href={`/page/${page}`}
                      className="pagination__link"
                      data-test-id={`${paginationTestIds.page}-${page}`}
                    >
                      {page}
                    </a>
                  </Link>
                </li>
              );
          }
        })}

        {currentPage < totalPages && (
          <li className="pagination__page">
            <Link href="/page/[page]" as={`/page/${currentPage + 1}`} passHref>
              <a
                href={`/page/${currentPage + 1}`}
                className="pagination__link"
                data-test-id={paginationTestIds.next}
              >
                {'>'}
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
