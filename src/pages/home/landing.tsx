import { ProductsResponse } from '@/entities/product/types';
import { useLoaderData } from 'react-router';

const Landing = () => {
  const result = useLoaderData() as ProductsResponse;
  console.log(result);

  return <>Landing</>;
};

export default Landing;
