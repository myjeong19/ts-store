import { type LoaderFunction } from 'react-router';
import { customFetch } from '@/shared/api';
import type { ProductsResponse } from '@/shared/types/response/products';

import { PRODUCTS_END_POINT } from '@/shared/constants';

export const loader: LoaderFunction = async () => {
  const response = await customFetch<ProductsResponse>(PRODUCTS_END_POINT);

  return await response.json();
};
