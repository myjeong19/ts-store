import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/shared/shadcn-ui';

import { HERO_CAROUSEL } from '../constants';

export const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {HERO_CAROUSEL.images.map((image, index) => (
            <CarouselItem key={HERO_CAROUSEL.key + index}>
              <Card>
                <CardContent className="p-2">
                  <img
                    src={image}
                    alt="hero"
                    className="w-full h-[24rem] rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
