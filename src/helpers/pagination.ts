import { DEFAULT_PAGE_NUMBER, DEFAULT_PAGE_SIZE } from 'config';

interface PaginateProps<Type> {
  items: Type[];
  pageNumber: number;
  pageSize: number;
}

const paginate = <Type>({
  items,
  pageNumber,
  pageSize,
}: PaginateProps<Type>): Type[] => {
  const startIndex = (pageNumber - 1) * pageSize;

  return items.slice(startIndex, startIndex + pageSize);
};

const getPaginationData = <Type>(
  items: Type[],
  pageNumber = DEFAULT_PAGE_NUMBER,
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
