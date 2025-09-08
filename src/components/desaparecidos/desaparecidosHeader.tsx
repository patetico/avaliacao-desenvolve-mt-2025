import type { ComponentProps } from 'react';
import DesaparecidosPageSize from '~/components/desaparecidos/desaparecidosPageSize.tsx';

import useDesaparecidosApi from '~/hooks/useDesaparecidosApi.ts';
import { cn } from '~/lib/shadcn.ts';


function DesaparecidosHeader({ className, ...props }: ComponentProps<'div'>) {
  const {
    data,
    isFetching,
    isError,
  } = useDesaparecidosApi();

  const message = (() => {
    if (isFetching) return 'Carregando busca...';
    if (isError || !data) return 'Erro!';
    return `${data.countItems} resultados encontrados`;
  })();

  return (
    <div className={cn("flex justify-between gap-2 border-b", className)} {...props}>
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        {message}
      </h2>
      <DesaparecidosPageSize />
    </div>
  );
}

export default DesaparecidosHeader;
