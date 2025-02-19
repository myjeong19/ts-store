import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';
import { Outlet, useNavigation } from 'react-router';

import { Loading } from '@/shared/ui/loading';

export const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element py-20">{isLoading ? <Loading /> : <Outlet />}</div>
    </>
  );
};
