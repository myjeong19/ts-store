import type { LoaderFunction } from 'react-router';
import { Product } from '@/shared/types';
import { customFetch } from '@/shared/api';
import { PRODUCTS_END_POINT } from '@/shared/constants';

export type SingleProductResponse = {
  data: Product;
  meta: {};
};

export const loader: LoaderFunction = async ({ params }): Promise<SingleProductResponse> => {
  const response = customFetch<SingleProductResponse>(`${PRODUCTS_END_POINT}/${params.id}`);

  const result = await response.json();

  return { ...result };
};
