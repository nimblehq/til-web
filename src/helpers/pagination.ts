interface PaginateProps {
  items: unknown[];
  pageNumber: number;
  pageSize: number;
}

const DEFAULT_PAGE_SIZE = 10;

const paginate = ({ items, pageNumber, pageSize }: PaginateProps) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};

const getPaginationData = (
  items: unknown[],
  pageNumber = 1,
  pageSize = DEFAULT_PAGE_SIZE
) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / pageSize);
  const paginatedItems = paginate({ items, pageNumber, pageSize });

  return {
    totalItems,
    totalPages,
    paginatedItems,
  };
};

export { getPaginationData };
