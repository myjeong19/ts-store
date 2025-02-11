import { Logo } from './logo';
import { LinksDropdown } from './links-dropdown';
import { NavLinks } from './nav-links';
import { ModeToggle } from './mode-toggle';
import { CartButton } from './cart-button';

export const Navbar = () => (
  <nav className="bg-muted py-4">
    <div className="align-element flex justify-between items-center">
      <Logo />
      <LinksDropdown />
      <NavLinks />
      <div className="flex justify-center items-center gap-x-4">
        <ModeToggle />
        <CartButton />
      </div>
    </div>
  </nav>
);
