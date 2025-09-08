import { ExternalLink, Info } from 'lucide-react';
import type { ComponentProps } from 'react';
import { cn } from '~/lib/shadcn.ts';


const PageFooter = ({ className, ...props }: ComponentProps<'header'>) => (
  <footer className={cn("h-footer flex shrink-0 items-center gap-2 border-t px-4", className)} {...props}>
    <Info className="size-5" />
    Saiba mais sobre o projeto no
    <a
      href="https://github.com/patetico/avaliacao-desenvolve-mt-2025/"
      className="border-b border-current"
      target="_blank"
      rel="noopener noreferrer"
    >
      {'Github'}
      <ExternalLink className="inline-block size-3 mb-1 ml-1" />
    </a>
  </footer>
);

export default PageFooter;
