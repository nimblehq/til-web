import { getPaginationData } from './pagination';

describe('pagination', () => {
  describe('getPaginationData', () => {
    describe('given an array of items', () => {
      describe('given a valid page number', () => {
        describe('given a page size', () => {
          it('returns pagination data', () => {
            const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            const pageNumber = 2;
            const pageSize = 3;
            const { totalItems, totalPages, paginatedItems } =
              getPaginationData(items, pageNumber, pageSize);

            expect(totalItems).toBe(10);
            expect(totalPages).toBe(4);
            expect(paginatedItems).toHaveLength(pageSize);
            expect(paginatedItems[0]).toBe(4);
            expect(paginatedItems[1]).toBe(5);
            expect(paginatedItems[2]).toBe(6);
          });
        });
      });

      describe('given an invalid page number', () => {
        it('returns an empty array', () => {
          const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const pageNumber = 0;
          const pageSize = 3;
          const { paginatedItems } = getPaginationData(
            items,
            pageNumber,
            pageSize
          );

          expect(paginatedItems).toHaveLength(0);
        });
      });

      describe('given an out-of-bounds page number', () => {
        it('returns an empty array', () => {
          const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
          const pageNumber = 5;
          const pageSize = 3;
          const { paginatedItems } = getPaginationData(
            items,
            pageNumber,
            pageSize
          );

          expect(paginatedItems).toHaveLength(0);
        });
      });
    });

    describe('given an empty array of items', () => {
      describe('given a page number', () => {
        describe('given a page size', () => {
          it('returns pagination data', () => {
            const items = [] as unknown[];
            const pageNumber = 2;
            const pageSize = 3;
            const { totalItems, totalPages, paginatedItems } =
              getPaginationData(items, pageNumber, pageSize);

            expect(totalItems).toBe(0);
            expect(totalPages).toBe(0);
            expect(paginatedItems).toHaveLength(0);
          });
        });
      });
    });
  });
});
