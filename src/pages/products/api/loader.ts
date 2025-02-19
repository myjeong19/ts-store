import type { LoaderFunction } from 'react-router';
import type { ProductsResponse } from '@/shared/types/response';
import type { ProductResponseWithParams } from '@/features/products/types';

import { customFetch } from '@/shared/api';

import { PRODUCTS_END_POINT } from '@/shared/constants';

export const loader: LoaderFunction = async ({ request }): Promise<ProductResponseWithParams> => {
  const searchParams = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

  const response = await customFetch<ProductsResponse>(PRODUCTS_END_POINT, {
    searchParams,
  });

  const result = await response.json();

  return { ...result, searchParams };
};
