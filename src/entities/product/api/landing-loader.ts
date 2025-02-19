import { type LoaderFunction } from 'react-router';
import { customFetch } from '@/shared/api';
import type { ProductsResponse } from '../types';

import { FEATURED_PRODUCTS_END_POINT } from '../constants';

export const landingLoader: LoaderFunction = async () => {
  const response = await customFetch<ProductsResponse>(FEATURED_PRODUCTS_END_POINT);

  return await response.json();
};
