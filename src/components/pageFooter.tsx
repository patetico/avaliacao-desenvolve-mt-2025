import type { ComponentProps } from 'react';
import { cn } from '~/lib/shadcn.ts';


const PageFooter = ({ className, children, ...props }: ComponentProps<'header'>) => (
  <footer className={cn("flex shrink-0 items-center gap-2 border-t p-4", className)} {...props}>
    {children}
  </footer>
);

export default PageFooter;
