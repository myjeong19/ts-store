import { Button } from '@/shared/shadcn-ui';

import { useAuth } from '../model';
import { ButtonLink } from '@/shared/ui';

export const Header = () => {
  const { user, logoutHandler } = useAuth();

  return (
    <header>
      <div className="flex justify-center align-element sm:justify-end py-2">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm ">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={logoutHandler}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center -mr-4">
            <ButtonLink to="/login">Sign in / Guest</ButtonLink>
            <ButtonLink to="/register">Register</ButtonLink>
          </div>
        )}
      </div>
    </header>
  );
};
