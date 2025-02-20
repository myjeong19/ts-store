import { Filters } from '@/features/product-filters/ui';
import { ProductsContainer, PaginationContainer } from '@/widgets/products/ui';

const Products = () => (
  <>
    <Filters />
    <ProductsContainer />
    <PaginationContainer />
  </>
);

export default Products;
