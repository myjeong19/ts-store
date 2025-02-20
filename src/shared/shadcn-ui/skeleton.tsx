import { cn } from '@/shared/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10 width-[calc(100vw-8px)]', className)}
      {...props}
    />
  );
}

export { Skeleton };
