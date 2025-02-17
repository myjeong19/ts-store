import { Armchair } from 'lucide-react';
import { ButtonLink } from '@/shared/ui';

export const Logo = () => {
  return (
    <ButtonLink
      to="/"
      variant="default"
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      <Armchair className="w-8 h-8" />
    </ButtonLink>
  );
};
