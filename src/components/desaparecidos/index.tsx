import { range } from 'es-toolkit';
import { type ComponentProps } from 'react';
import { DEFAULT_PAGE_SIZE } from '~/components/desaparecidos/desaparecidosPageSizeValues.ts';

import useDesaparecidosApi from '~/hooks/useDesaparecidosApi.ts';
import { cn } from '~/lib/shadcn.ts';
import { useAppSelector } from '~/state/store.ts';

import CardPessoaDesaparecida from './cardPessoaDesaparecida.tsx';
import CardPessoaDesaparecidaSkeleton from './cardPessoaDesaparecidaSkeleton.tsx';
import DesaparecidosHeader from './desaparecidosHeader.tsx';
import DesaparecidosPagination from './desaparecidosPagination.tsx';


function DesaparecidosContent({ className, ...props }: ComponentProps<'div'>) {
  const {
    data,
    isFetching,
  } = useDesaparecidosApi();

  const pessoasDesaparecidas = data?.content ?? [];
  const pageSize = useAppSelector((state) => state.desaparecidosQuery.porPagina || DEFAULT_PAGE_SIZE);

  return (
    <div className={cn("@container/desaparecidos flex flex-col gap-2", className)} {...props}>
      <DesaparecidosHeader className="mb-4" />
      <DesaparecidosPagination />
      <div className="grid auto-rows-min grid-rows-none gap-4 grid-cols-1 @2xl/desaparecidos:grid-cols-2 @4xl/desaparecidos:grid-cols-4 @6xl/desaparecidos:grid-cols-6">
        {isFetching
          ? range(pageSize).map(i => <CardPessoaDesaparecidaSkeleton key={i} />)
          : pessoasDesaparecidas.map(p => (<CardPessoaDesaparecida key={p.id} pessoa={p} className="h-full" />))
        }
      </div>
      <DesaparecidosPagination />
    </div>
  );
}

export default DesaparecidosContent;
