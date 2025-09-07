import type { ComponentProps } from 'react';
import Pessoa from '~/components/detalhesPessoa/pessoa';
import { cn } from '~/lib/shadcn.ts';
import { type TransformedPessoaDTO, useDetalhesPessoaQuery } from '~/state/slices/apiSlice.ts';


interface DetalhesPessoaContentProps {
  isFetching: boolean;
  detalhes?: TransformedPessoaDTO;
}

function DetalhesPessoaContent({ isFetching, detalhes }: DetalhesPessoaContentProps) {
  if (isFetching) return 'carregando...'; // TODO: skeleton
  if (!detalhes) return 'erro'; // TODO: error message
  return (<Pessoa detalhes={detalhes} />);
}

interface PessoaDesaparecidaProps extends ComponentProps<'div'> {
  idPessoa: number;
}

function DetalhesPessoa({ idPessoa, className, ...props }: PessoaDesaparecidaProps) {
  const {
    data: detalhes,
    isFetching,
  } = useDetalhesPessoaQuery({ id: idPessoa });

  return (
    <div className={cn("flex justify-center w-full max-w-6xl", className)} {...props}>
      <DetalhesPessoaContent isFetching={isFetching} detalhes={detalhes} />
    </div>
  );
}

export default DetalhesPessoa;
