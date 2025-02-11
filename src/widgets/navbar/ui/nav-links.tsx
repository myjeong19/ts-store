import { LINKS } from '../constants';
import { NavLink } from 'react-router';

export const NavLinks = () => (
  <div className="hidden lg:flex justify-center items-center gap-x-4">
    {LINKS.map(link => (
      <NavLink
        key={link.href}
        to={link.href}
        className={({ isActive }) => `
            capitalize font-light tracking-wide ${isActive ? 'text-primary' : ''}`}
      >
        {link.label}
      </NavLink>
    ))}
  </div>
);
