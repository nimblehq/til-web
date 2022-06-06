import { render, screen } from '@testing-library/react';

import Pagination, { paginationTestIds } from './Pagination';

describe('Pagination', () => {
  it('renders the pagination', () => {
    render(<Pagination currentPage={1} totalPages={1} />);

    const pagination = screen.getByTestId(paginationTestIds.root);

    expect(pagination).toBeVisible();
  });

  describe('previous button', () => {
    describe('when the current page is not the first page', () => {
      it('renders the previous button enabled', () => {
        render(<Pagination currentPage={2} totalPages={1} />);

        const previousButton = screen.getByTestId(paginationTestIds.prev);

        expect(previousButton).not.toBeDisabled();
      });
    });

    describe('when the current page is the first page', () => {
      it('renders the previous button disabled', () => {
        render(<Pagination currentPage={1} totalPages={1} />);

        const previousButton = screen.getByTestId(paginationTestIds.prev);

        expect(previousButton).toHaveClass('btn-disabled');
      });
    });
  });

  describe('next button', () => {
    describe('when the current page is not the last page', () => {
      it('renders the next button enabled', () => {
        render(<Pagination currentPage={1} totalPages={2} />);

        const nextButton = screen.getByTestId(paginationTestIds.next);

        expect(nextButton).not.toBeDisabled();
      });
    });

    describe('when the current page is the last page', () => {
      it('renders the next button disabled', () => {
        render(<Pagination currentPage={2} totalPages={2} />);

        const nextButton = screen.getByTestId(paginationTestIds.next);

        expect(nextButton).toHaveClass('btn-disabled');
      });
    });
  });
});
