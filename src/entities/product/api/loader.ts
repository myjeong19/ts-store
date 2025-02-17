import { type LoaderFunction } from 'react-router';
import { customFetch } from '@/shared/api';
import type { ProductsResponse } from '../types';

import { PRODUCT_URL } from '../constants';

export const loader: LoaderFunction = async () => {
  const response = await customFetch<ProductsResponse>(PRODUCT_URL);

  const result = await response.json();

  return { ...result.data };
};
