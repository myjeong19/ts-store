type ConstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
};

export const constructUrl = ({ pageNumber, search, pathname }: ConstructUrlParams): string => {
  const searchParams = new URLSearchParams(search);

  searchParams.set('page', String(pageNumber));

  return `${pathname}?${searchParams.toString()}`;
};

type ConstructPrevOrNextParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
};

export const constructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
}: ConstructPrevOrNextParams): {
  prevUrl: string;
  nextUrl: string;
} => {
  let prevPage = currentPage - 1;
  if (prevPage < 1) prevPage = 1;
  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname });

  let nextPage = currentPage + 1;
  if (nextPage > pageCount) nextPage = pageCount;
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname });

  return { prevUrl, nextUrl };
};
