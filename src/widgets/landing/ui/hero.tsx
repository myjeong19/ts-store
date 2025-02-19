import { ButtonLink } from '@/shared/ui';
import { HeroCarousel } from './hero-carousel';

export const Hero = () => (
  <section className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
    <div>
      <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
        We are changing the way people shop
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-8">
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
        velit..."
      </p>
      <ButtonLink variant="default" size="lg" className="mt-10" to="/products">
        Our Products
      </ButtonLink>
    </div>
    <HeroCarousel />
  </section>
);
