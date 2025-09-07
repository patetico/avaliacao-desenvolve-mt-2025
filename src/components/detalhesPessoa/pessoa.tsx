import { Info } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import FotoPessoaDesaparecida from '~/components/fotoPessoaDesaparecida';
import { formatDate } from '~/lib/formatters';
import { cn } from '~/lib/shadcn.ts';
import type { TransformedPessoaDTO } from '~/state/slices/apiSlice';
import { Separator } from '~ui/separator';


interface DetalhesPessoa {
  detalhes: TransformedPessoaDTO;
}

function NaoInformado() {
  return (
    <span className="text-muted-foreground">Não informado</span>
  );
}

interface BlehProps extends ComponentProps<'li'> {
  label: string;
  info?: ReactNode;
}

function InfoDesaparecimento({ label, info, className, ...props }: BlehProps) {
  return (
    <li className={cn('ml-4 -indent-4', className)} {...props}>
      <span className="text-sm text-muted-foreground uppercase">{label}:</span>
      {' '}
      {info || <NaoInformado />}
    </li>
  );
}

function PessoaDesaparecida({ detalhes }: DetalhesPessoa) {
  return (
    <>
      <InfoDesaparecimento label="Desapareceu em" info={formatDate(detalhes.perdidoEm)} />
      <InfoDesaparecimento label="Local" info={detalhes.local} />
      <InfoDesaparecimento label="Vestimenta" info={detalhes.roupas} />
      {detalhes.informacao &&
        <li className="flex gap-2">
          <div><Info className="my-1" size="1.25em" /></div>
          <span className="indent-0">{detalhes.informacao}</span>
        </li>
      }
    </>
  );
}

function PessoaEncontrada({ detalhes }: DetalhesPessoa) {
  return (
    <>
      <InfoDesaparecimento
        label={`Encontrad${detalhes.sexo === 'feminino' ? 'a' : 'o'} em`}
        info={formatDate(detalhes.encontradoEm)}
      />
      <li>
        Dados do desaparecimento:
        <ul className="ml-2 pl-2 py-2 border-l-2">
          <PessoaDesaparecida detalhes={detalhes} />
        </ul>
      </li>
    </>
  );
}

function StatusDesaparecimento({ status }: { status: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-md px-2 py-0.5 text-gray-50 text-sm uppercase tracking-widest font-bold text-shadow-sm',
        status.startsWith('encontrad') ? 'bg-encontrada' : 'bg-desaparecida',
      )}
    >
      {status}
    </span>
  );
}

function Pessoa({ detalhes, className, ...props }: ComponentProps<'div'> & DetalhesPessoa) {
  return (
    <div className={cn("flex justify-center items-start gap-6 p-6 w-full min-h-[75lvh] max-w-7xl", className)} {...props}>
      <div className="flex-3 basis-1">
        <div className="aspect-3/4">
          <FotoPessoaDesaparecida url={detalhes?.urlFoto} align="top" />
        </div>
      </div>
      <div className="flex-4 basis-2">
        <ul>
          <li className="mb-2">
            <StatusDesaparecimento status={detalhes.statusTxt} />
          </li>
          <li>
            <span className="sr-only">Nome:</span>
            <span className="text-2xl font-semibold tracking-tight">{detalhes.nome}</span>
          </li>
          <li className="mb-2">
            {detalhes.idadeTxt}, sexo {detalhes.sexo}
            <Separator orientation="horizontal" />
          </li>
          {detalhes.encontradoEm
            ? <PessoaEncontrada detalhes={detalhes} />
            : <PessoaDesaparecida detalhes={detalhes} />
          }
        </ul>
      </div>
    </div>
  );
}

export default Pessoa;
