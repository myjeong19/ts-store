import { Skeleton } from '@/shared/shadcn-ui';

export const Loading = () => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 max-auto w-[250px]" />
            <Skeleton className="h-4 max-auto w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
};
