import { range } from 'es-toolkit';
import { RefreshCcw, ServerCrash, Skull } from 'lucide-react';
import { type ComponentProps } from 'react';

import { DEFAULT_PAGE_SIZE } from '~/components/desaparecidos/desaparecidosPageSizeValues';
import useDesaparecidosApi from '~/hooks/useDesaparecidosApi';
import { cn } from '~/lib/shadcn';
import type { TransformedPessoaDTO } from '~/state/slices/apiSlice';
import { useAppSelector } from '~/state/store';
import { Button } from '~ui/button';

import CardPessoaDesaparecida from './cardPessoaDesaparecida';
import CardPessoaDesaparecidaSkeleton from './cardPessoaDesaparecidaSkeleton';
import DesaparecidosHeader from './desaparecidosHeader';
import DesaparecidosPagination from './desaparecidosPagination';


function DesaparecidosContentLoading({ size }: { size: number }) {
  return range(size).map(i => <CardPessoaDesaparecidaSkeleton key={i} />);
}

function DesaparecidosContentError({ retry }: { retry: () => void }) {
  return (
    <div className="flex flex-col items-center">
      <ServerCrash size="8rem" className="text-red-500" />
      <p className="text-xl mb-2">
        Houve um erro inesperado na API <Skull className="inline-block mb-1" />
      </p>
      <Button variant="secondary" onClick={() => retry()}>
        Tentar novamente
        <RefreshCcw />
      </Button>
    </div>
  );
}

function DesaparecidosContentList({ pessoas }: { pessoas: TransformedPessoaDTO[] }) {
  return pessoas.map(p => (<CardPessoaDesaparecida key={p.id} pessoa={p} className="h-full" />));
}


function DesaparecidosContent({ className, ...props }: ComponentProps<'div'>) {
  const {
    data,
    isFetching,
    isError,
    refetch,
  } = useDesaparecidosApi();

  const pessoasDesaparecidas = data?.content ?? [];
  const pageSize = useAppSelector((state) => state.desaparecidosQuery.porPagina || DEFAULT_PAGE_SIZE);

  return (
    <div className={cn("@container/desaparecidos flex flex-col gap-2", className)} {...props}>
      <DesaparecidosHeader className="mb-4" />
      {isError || !pessoasDesaparecidas
        ? <DesaparecidosContentError retry={refetch} />
        : (<>
          <DesaparecidosPagination />
          <div className="grid auto-rows-min grid-rows-none gap-4 grid-cols-1 @2xl/desaparecidos:grid-cols-2 @4xl/desaparecidos:grid-cols-4 @6xl/desaparecidos:grid-cols-6">
            {isFetching
              ? <DesaparecidosContentLoading size={pageSize} />
              : <DesaparecidosContentList pessoas={pessoasDesaparecidas} />}
          </div>
          <DesaparecidosPagination />
        </>)
      }
    </div>
  );
}

export default DesaparecidosContent;
