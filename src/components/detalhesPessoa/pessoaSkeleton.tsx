import type { ComponentProps } from 'react';

import { cn } from '~/lib/shadcn.ts';
import { Separator } from '~ui/separator';
import { Skeleton } from '~ui/skeleton';


function PessoaSkeleton({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div className={cn("flex justify-center items-start gap-6 p-6 w-full min-h-[75lvh] max-w-7xl", className)} {...props}>
      <div className="flex-3 basis-1">
        <div className="aspect-3/4">
          <Skeleton className="size-full" />
        </div>
      </div>
      <div className="flex-4 basis-2">
        <ul>
          <li className="mb-2">
            <Skeleton className="w-36 h-lh" />
          </li>
          <li>
            <Skeleton className="text-2xl h-lh w-96 max-w-3/4 mb-1" />
          </li>
          <li className="mb-2">
            <Skeleton className="h-lh w-44 max-w-3/4 mb-1" />
            <Separator orientation="horizontal" />
          </li>
          <li>
            <Skeleton className="h-lh mb-1 w-56" />
          </li>
          <li>
            <Skeleton className="h-lh mb-1 w-72" />
          </li>
          <li>
            <Skeleton className="h-lh mb-1 w-60" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PessoaSkeleton;
