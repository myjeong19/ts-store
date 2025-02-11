import { AlignLeft } from 'lucide-react';
import { NavLink } from 'react-router';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
} from '@/shared/shadcn-ui';

import { LINKS } from '../constants';

export const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 lg:hidden" align="start" sideOffset={25}>
        {LINKS.map(link => (
          <DropdownMenuItem key={link.href}>
            <NavLink
              to={link.href}
              className={({ isActive }) => `
            capitalize w-full ${isActive ? 'text-primary' : ''}`}
            >
              {link.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
