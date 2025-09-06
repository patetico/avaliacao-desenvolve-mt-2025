import { ChevronsDownUp, ChevronsUpDown, Link2 } from 'lucide-react';
import { type ComponentProps, useState } from 'react';

import FotoPessoaDesaparecida from '~/components/fotoPessoaDesaparecida';

import { toDate } from '~/lib/converters';
import { formatDate } from '~/lib/formatters';
import type { TransformedPessoaDTO } from '~/state/slices/apiSlice';

import { Button } from '~ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~ui/collapsible';
import { Separator } from '~ui/separator';


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
          <div className="aspect-square w-full">
            <FotoPessoaDesaparecida url={urlFoto} />
          </div>
          <CardTitle className="uppercase">{nome}</CardTitle>
          <CardDescription>{idadeTxt}, sexo {sexo?.toLowerCase()}</CardDescription>
        </CardHeader>

        <CardContent className="py-0">
          <ul className="ml-4 list-disc [&>li]:mt-1">
            {encontradoEm
              ? <li>Encontrado: {formatDate(encontradoEm)}</li>
              : <li>Desaparecido: {perdidoEm ? formatDate(perdidoEm) : '--/--/----'}</li>}
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
