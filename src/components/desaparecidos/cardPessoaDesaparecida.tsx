import { ChevronsDownUp, ChevronsUpDown, Link2 } from 'lucide-react';
import { type ComponentProps, useState } from 'react';

import FotoPessoaDesaparecida from '~/components/fotoPessoaDesaparecida';
import { formatDate } from '~/lib/formatters';
import { cn } from '~/lib/shadcn';
import type { TransformedPessoaDTO } from '~/state/slices/apiSlice';

import { Button } from '~ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~ui/collapsible';
import { Separator } from '~ui/separator';


const STATUS_COLORS: Record<TransformedPessoaDTO['statusTxt'], string> = {
  'desaparecida': 'text-red-400',
  'desaparecido': 'text-red-400',
  'encontrado': 'text-teal-400',
  'encontrada': 'text-teal-400',
};

interface CardPessoaDesaparecidaProps extends ComponentProps<'div'> {
  pessoa: TransformedPessoaDTO;
}

function CardPessoaDesaparecida({ pessoa, ...props }: CardPessoaDesaparecidaProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    id,
    nome,
    idadeTxt,
    sexo,
    statusTxt,
    urlFoto,
    perdidoEm,
    encontradoEm,
    local,
    informacao,
    roupas,
  } = pessoa;

  const hasMoreInfo = roupas || informacao;

  return (
    <Collapsible open={isExpanded} asChild>
      <Card {...props}>
        <CardHeader>
          <div className="flex justify-center">
            <span
              className={cn(
                "uppercase text-sm font-bold border-y-2 border-y-current px-2 tracking-widest text-muted",
                STATUS_COLORS[statusTxt],
              )}
            >
              {statusTxt}
            </span>
          </div>
          <div className="aspect-square w-full">
            <FotoPessoaDesaparecida url={urlFoto} />
          </div>
          <CardTitle className="uppercase">{nome}</CardTitle>
          <CardDescription>{idadeTxt}, sexo {sexo?.toLowerCase()}</CardDescription>
        </CardHeader>

        <CardContent className="py-0">
          <ul className="ml-4 list-disc [&>li]:mt-1">
            <li>Data: {formatDate(encontradoEm ?? perdidoEm)}</li>
            {local && <li>Local: {local}</li>}

            {roupas &&
              <CollapsibleContent>
                <li>Vestimenta: {roupas}</li>
              </CollapsibleContent>
            }
          </ul>

          {informacao &&
            <CollapsibleContent>
              <Separator className="my-2" />
              <p>{informacao}</p>
            </CollapsibleContent>
          }
        </CardContent>

        <CardFooter className="mt-auto flex justify-end gap-2">
          {hasMoreInfo &&
            <CollapsibleTrigger asChild>
              <Button size="icon" variant="outline" onClick={() => setIsExpanded(b => !b)}>
                {isExpanded ? <ChevronsDownUp /> : <ChevronsUpDown />}
              </Button>
            </CollapsibleTrigger>
          }
          <Button size="icon" variant="outline">
            <Link2 />
          </Button>
        </CardFooter>
      </Card>
    </Collapsible>
  );
}

export default CardPessoaDesaparecida;
