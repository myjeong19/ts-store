import { ProductsResponse } from '@/entities/product/types';
import { Products } from '@/features/products/ui';
import { useLoaderData } from 'react-router';

const Landing = () => {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);

  return (
    <>
      <Products />
    </>
  );
};

export default Landing;
