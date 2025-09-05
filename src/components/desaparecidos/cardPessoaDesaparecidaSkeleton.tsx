import { type ComponentProps } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~ui/card.tsx';
import { Skeleton } from '~ui/skeleton.tsx';


function cardPessoaDesaparecidaSkeleton(props: ComponentProps<typeof Card>) {
  return (
    <Card {...props}>
      <div className="aspect-square w-full px-6">
        <Skeleton className="aspect-2/3 h-full mx-auto" />
      </div>

      <CardHeader>
        <CardTitle>
          <Skeleton className="text-xl h-lh" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="text-xs h-lh w-3/4" />
        </CardDescription>
      </CardHeader>

      <CardContent className="py-0">
        <ul className="ml-4 list-disc [&>li]:mt-1 text-sm text-muted">
          <li>
            <Skeleton className="h-lh w-3/4" />
          </li>
          <li>
            <Skeleton className="h-lh w-3/4" />
          </li>
        </ul>
      </CardContent>

      <CardFooter className="mt-auto flex justify-end gap-2">
        <Skeleton className="aspect-square w-9" />
        <Skeleton className="aspect-square w-9" />
      </CardFooter>
    </Card>
  );
}

export default cardPessoaDesaparecidaSkeleton;
