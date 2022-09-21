import { render, screen } from '@testing-library/react';

import Pagination, { paginationTestIds } from '.';

describe('Pagination', () => {
  describe('when there are multiple pages', () => {
    it('renders the pagination', () => {
      render(<Pagination currentPage={1} totalPages={2} />);

      const pagination = screen.getByTestId(paginationTestIds.root);

      expect(pagination).toBeVisible();
    });

    describe('previous button', () => {
      describe('when the current page is NOT the first page', () => {
        it('renders the previous button', () => {
          render(<Pagination currentPage={2} totalPages={2} />);

          const previousButton = screen.getByTestId(paginationTestIds.prev);

          expect(previousButton).toBeVisible();
        });
      });

      describe('when the current page is the first page', () => {
        it('does NOT render the previous button', () => {
          render(<Pagination currentPage={1} totalPages={2} />);

          const previousButton = screen.queryByTestId(paginationTestIds.prev);

          expect(previousButton).not.toBeInTheDocument();
        });
      });
    });

    describe('next button', () => {
      describe('when the current page is NOT the last page', () => {
        it('renders the next button', () => {
          render(<Pagination currentPage={1} totalPages={2} />);

          const nextButton = screen.getByTestId(paginationTestIds.next);

          expect(nextButton).toBeVisible();
        });
      });

      describe('when the current page is the last page', () => {
        it('does NOT render the next button', () => {
          render(<Pagination currentPage={2} totalPages={2} />);

          const nextButton = screen.queryByTestId(paginationTestIds.next);

          expect(nextButton).not.toBeInTheDocument();
        });
      });
    });
  });

  describe('when there is only one page', () => {
    it('does not render the pagination', () => {
      render(<Pagination currentPage={1} totalPages={1} />);

      const pagination = screen.queryByTestId(paginationTestIds.root);

      expect(pagination).not.toBeInTheDocument();
    });
  });
});
