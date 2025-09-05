import type { ComponentProps } from 'react';

import useDesaparecidosApi from '~/hooks/useDesaparecidosApi.ts';
import { cn } from '~/lib/shadcn.ts';

import CardPessoaDesaparecida from './cardPessoaDesaparecida.tsx';
import DesaparecidosPagination from './desaparecidosPagination.tsx';


function DesaparecidosContent({ className, ...props }: ComponentProps<'div'>) {
  const {
    data: pessoasDesaparecidas,
    isFetching,
  } = useDesaparecidosApi();

  if (isFetching) return 'carregando...';

  return (
    <div className={cn("@container/desaparecidos flex flex-col gap-2", className)} {...props}>
      <DesaparecidosPagination />
      <div className="grid auto-rows-min grid-rows-none gap-4 grid-cols-1 @xl/desaparecidos:grid-cols-2 @3xl/desaparecidos:grid-cols-3 @6xl/desaparecidos:grid-cols-4">
        {pessoasDesaparecidas?.content?.map(p => (<CardPessoaDesaparecida key={p.id} pessoa={p} className="h-full" />))}
      </div>
      <DesaparecidosPagination />
    </div>
  );
}

export default DesaparecidosContent;
