import { Link } from 'react-router';
import { Button } from '../shadcn-ui';

type LinkButtonProps = {
  to: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const LinkButton = ({ to, children, ...props }: LinkButtonProps) => (
  <Button asChild variant="link" size="sm" {...props}>
    <Link to={to}>{children}</Link>
  </Button>
);
