import { type LoaderFunction } from 'react-router';
import { customFetch } from '@/shared/api';
import type { ProductsResponse } from '@/shared/types/response';

import { FEATURED_PRODUCTS_END_POINT } from './../constants/end_point';

export const loader: LoaderFunction = async () => {
  const response = await customFetch<ProductsResponse>(FEATURED_PRODUCTS_END_POINT);

  return await response.json();
};
