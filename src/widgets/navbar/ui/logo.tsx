import { LinkButton } from '@/shared/ui';
import { Armchair } from 'lucide-react';

export const Logo = () => {
  return (
    <LinkButton
      to="/"
      variant="default"
      className="hidden lg:flex justify-center items-center bg-primary p-2 rounded-lg text-white"
    >
      <Armchair className="w-8 h-8" />
    </LinkButton>
  );
};
