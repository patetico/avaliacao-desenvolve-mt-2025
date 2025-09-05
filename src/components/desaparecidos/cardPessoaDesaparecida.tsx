import { ChevronsDownUp, ChevronsUpDown, Link2 } from 'lucide-react';
import { type ComponentProps, useState } from 'react';

import MissingPerson from '~/components/icons/MissingPerson.tsx';

import { toDate } from '~/lib/converters.ts';
import { formatDate } from '~/lib/formatters.ts';
import type { PessoaDTO } from '~/types/api/_base.ts';

import { Button } from '~ui/button.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~ui/card.tsx';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~ui/collapsible.tsx';
import { Separator } from '~ui/separator.tsx';


interface CardPessoaDesaparecidaProps extends ComponentProps<'div'> {
  pessoa: PessoaDTO;
}

function CardPessoaDesaparecida({ pessoa, ...props }: CardPessoaDesaparecidaProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const image = pessoa.urlFoto
    ? (<img src={pessoa.urlFoto} alt="Foto da pessoa desaparecida" className="object-contain size-full" />)
    : (<MissingPerson aria-label="Ilustração de pessoa desaparecida sem foto" className="size-full" />);

  const extra = pessoa.ultimaOcorrencia;

  const perdidoEm = toDate(extra?.dtDesaparecimento);
  const achadoEm = toDate(extra?.dataLocalizacao);
  const local = extra?.localDesaparecimentoConcat;
  const roupas = extra?.ocorrenciaEntrevDesapDTO?.vestimentasDesaparecido;
  const infos = extra?.ocorrenciaEntrevDesapDTO?.informacao;

  const hasMoreInfo = roupas || infos;
  return (
    <Collapsible open={isExpanded} asChild>
      <Card {...props}>
        <div className="aspect-square w-full px-6">
          {image}
        </div>

        <CardHeader>
          <CardTitle className="uppercase">{pessoa.nome}</CardTitle>
          <CardDescription>{pessoa.idade} anos, sexo {pessoa.sexo?.toLowerCase()}</CardDescription>
        </CardHeader>

        <CardContent className="py-0">
          {extra && (
            <>
              <ul className="ml-4 list-disc [&>li]:mt-1">
                {achadoEm
                  ? <li>Encontrado: {formatDate(achadoEm)}</li>
                  : <li>Desaparecido: {perdidoEm ? formatDate(perdidoEm) : '---'}</li>}
                {local && <li>Local: {local}</li>}

                {roupas &&
                  <CollapsibleContent>
                    <li>Vestimenta: {roupas}</li>
                  </CollapsibleContent>
                }
              </ul>

              {infos &&
                <CollapsibleContent>
                  <Separator className="my-2" />
                  <p>{infos}</p>
                </CollapsibleContent>
              }
            </>
          )}
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
