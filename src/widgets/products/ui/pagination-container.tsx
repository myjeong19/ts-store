import { useLoaderData, useLocation } from 'react-router';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/shadcn-ui';

import { ProductResponseWithParams } from '@/features/product-filters/types';
import { constructPrevOrNextUrl, constructUrl } from '@/features/product-pagination/lib';

export const PaginationContainer = () => {
  const {
    meta: {
      pagination: { pageCount, page },
    },
  } = useLoaderData() as ProductResponseWithParams;

  const { search, pathname } = useLocation();

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  if (pageCount < 2) return null;

  const renderPagination = pages.map(pageNumber => {
    const isActive = pageNumber === page;
    const url = constructUrl({
      pageNumber,
      search,
      pathname,
    });

    return (
      <PaginationItem key={pageNumber}>
        <PaginationLink to={url} isActive={isActive}>
          {pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  });

  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: page,
    pageCount,
    search,
    pathname,
  });

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl}>Previous</PaginationPrevious>
        </PaginationItem>
        {renderPagination}
        <PaginationItem>
          <PaginationNext to={nextUrl}>Next</PaginationNext>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
