import { ProductsResponse } from '@/entities/product/types';
import { Products } from '@/features/products/ui';
import { Hero } from '@/widgets/landing/ui';
import { useLoaderData } from 'react-router';

const Landing = () => {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);

  return (
    <>
      <Hero />
      <Products />
    </>
  );
};

export default Landing;
