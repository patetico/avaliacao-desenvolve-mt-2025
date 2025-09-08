import { UserRoundSearch } from 'lucide-react';
import type { ComponentProps } from 'react';
import { Link } from 'react-router';

import ThemeToggle from '~/components/themeToggle.tsx';
import { cn } from '~/lib/shadcn.ts';
import { Separator } from '~ui/separator.tsx';


const PageHeader = ({ className, children, ...props }: ComponentProps<'header'>) => (
  <header className={cn("flex h-header shrink-0 items-center gap-2 border-b px-4", className)} {...props}>
    <Link to="/">
      <span className="sr-only">Ir para página inicial</span>
      <UserRoundSearch />
    </Link>
    <Separator orientation="vertical" className="mx-2" />
    {children}
    <ThemeToggle className="ml-auto" />
  </header>
);

export default PageHeader;
