import { Link } from 'react-router';
import { Button, type buttonVariants } from '../shadcn-ui';
import { VariantProps } from 'class-variance-authority';

type LinkButtonProps = {
  to: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const LinkButton = ({
  to,
  children,
  variant = 'link',
  size = 'sm',
  ...props
}: LinkButtonProps) => (
  <Button asChild variant={variant} size={size} {...props}>
    <Link to={to}>{children}</Link>
  </Button>
);
