import { Header } from '@/widgets/header';
import { Navbar } from '@/widgets/navbar';
import { Outlet } from 'react-router';

export const HomeLayout = () => (
  <>
    <Header />
    <Navbar />
    <div className="align-element py-20">
      <Outlet />
    </div>
  </>
);
