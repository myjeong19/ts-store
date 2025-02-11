import { useState } from 'react';
import { useNavigate } from 'react-router';

export const useAuth = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<{ username: string } | null>({
    username: 'demo user',
  });

  const logoutHandler = (): void => {
    setUser(null);
    navigate('/');
  };

  return { user, logoutHandler };
};
