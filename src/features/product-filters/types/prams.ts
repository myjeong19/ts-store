import { ProductsResponse } from '@/shared/types';

export type Prams = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  shipping?: string;
  page?: number;
};

export type ProductResponseWithParams = ProductsResponse & { searchParams: Prams };
