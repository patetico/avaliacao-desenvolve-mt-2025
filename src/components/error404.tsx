import { FileQuestionMark } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';


interface Error404Props {
  goto?: string;
  linkMsg?: string;
  children?: ReactNode;
}

export function Error404({ goto, linkMsg, children }: Error404Props) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <FileQuestionMark size="8rem" className="text-muted-foreground" />
      {children || <p className="text-xl">404 - Página não encontrada</p>}
      <Link className="underline underline-offset-4" to={goto || '/'}>
        {linkMsg || 'Voltar para home'}
      </Link>
    </div>
  );
}
