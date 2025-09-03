import { UserRoundSearch } from 'lucide-react';
import type { ComponentProps } from 'react';

import ThemeToggle from '~/components/themeToggle.tsx';
import { cn } from '~/lib/shadcn.ts';
import { Separator } from '~ui/separator.tsx';


const PageHeader = ({ className, children, ...props }: ComponentProps<'header'>) => (
  <header className={cn("flex h-(--header-height) shrink-0 items-center gap-2 border-b p-4", className)} {...props}>
    <UserRoundSearch />
    <Separator orientation="vertical" className="mx-2" />
    {children}
    <ThemeToggle className="ml-auto" />
  </header>
);

export default PageHeader;
