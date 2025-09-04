import type { ComponentProps } from 'react';
import { CardPessoaDesaparecida } from '~/components/desaparecidos/cardPessoaDesaparecida.tsx';
import { cn } from '~/lib/shadcn.ts';
import { usePessoasDesaparecidasQuery } from '~/state/slices/apiSlice.ts';


function DesaparecidosContent({ className, ...props }: ComponentProps<'div'>) {
  const {
    data: pessoasDesaparecidas,
    isFetching,
  } = usePessoasDesaparecidasQuery({ porPagina: 12 });

  if (isFetching) return 'carregando...';

  return (
    <div className={cn("@container/desaparecidos", className)} {...props}>
      <div className="grid auto-rows-min grid-rows-none gap-4 grid-cols-1 @xl/desaparecidos:grid-cols-2 @3xl/desaparecidos:grid-cols-3 @6xl/desaparecidos:grid-cols-4">
        {pessoasDesaparecidas?.content?.map(p => (<CardPessoaDesaparecida key={p.id} pessoa={p} className="h-full" />))}
      </div>
    </div>
  );
}

export default DesaparecidosContent;
