import type { ComponentProps } from 'react';

import Pessoa from '~/components/detalhesPessoa/pessoa';
import PessoaSkeleton from '~/components/detalhesPessoa/pessoaSkeleton';
import { Error404 } from '~/components/error404';
import { ErrorApi } from '~/components/errorApi';
import { cn } from '~/lib/shadcn.ts';
import { type TransformedPessoaDTO, useDetalhesPessoaQuery } from '~/state/slices/apiSlice';


function is404(err: unknown) {
  return !!err
    && typeof err === 'object'
    && 'status' in err
    && err.status === 404;
}


interface DetalhesPessoaContentProps {
  loading: boolean,
  detalhes?: TransformedPessoaDTO,
  error?: unknown,
  retry?: () => void
}

function DetalhesPessoaContent({ loading, detalhes, error, retry }: DetalhesPessoaContentProps) {
  if (loading) return (<PessoaSkeleton />);
  if (is404(error)) return (<Error404><p className="text-xl">404 - Esta pessoa não existe no servidor</p></Error404>);
  if (error || !detalhes) return (<ErrorApi retry={retry} />);

  return (<Pessoa detalhes={detalhes} />);
}

interface PessoaDesaparecidaProps extends ComponentProps<'div'> {
  idPessoa: number;
}

function DetalhesPessoa({ idPessoa, className, ...props }: PessoaDesaparecidaProps) {
  const {
    data: detalhes,
    isFetching,
    isError,
    error,
    refetch,
  } = useDetalhesPessoaQuery({ id: idPessoa });

  return (
    <div className={cn("flex justify-center w-full max-w-6xl", className)} {...props}>
      <DetalhesPessoaContent
        loading={isFetching}
        error={isError ? error : undefined}
        retry={refetch}
        detalhes={detalhes}
      />
    </div>
  );
}

export default DetalhesPessoa;
