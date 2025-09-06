import useDesaparecidosApi from '~/hooks/useDesaparecidosApi.ts';
import usePagination from '~/hooks/usePagination.ts';
import { desaparecidosQueryActions } from '~/state/slices/desaparecidosQuerySlice.ts';
import { useAppDispatch, useAppSelector } from '~/state/store.ts';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '~ui/pagination.tsx';


function DesaparecidosPagination() {
  const appDispatch = useAppDispatch();
  const paginaAtual = useAppSelector(state => state.desaparecidosQuery.pagina) || 0;

  const { data } = useDesaparecidosApi();
  const countPages = data?.countPages || 0;

  const pages = usePagination({
    current: paginaAtual,
    last: countPages,
  });

  const setPage = (page: number) => {
    appDispatch(desaparecidosQueryActions.setPagina(page));
  };

  if (!countPages) return;

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => setPage(paginaAtual - 1)} disabled={paginaAtual < 1} />
        </PaginationItem>

        {pages.map((p, i) => (
          <PaginationItem key={i}>
            {p === '...'
              ? <PaginationEllipsis />
              : (
                <PaginationLink
                  /* note: remember pages are 0-indexed on the server */
                  onClick={() => setPage(p - 1)}
                  isActive={paginaAtual === p - 1}
                >
                  {p}
                </PaginationLink>
              )
            }
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext onClick={() => setPage(paginaAtual + 1)} disabled={paginaAtual + 1 === countPages} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default DesaparecidosPagination;
