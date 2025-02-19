import { SectionTitle } from '@/shared/ui/section-title';
import { ProductGrid } from './product-grid';

export const Products = () => {
  return (
    <section className="pt-24">
      <SectionTitle text="products" />
      <ProductGrid />
    </section>
  );
};
