import { ChevronsDownUp, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import Desaparecidos from '~/components/desaparecidos';
import SearchForm from '~/components/searchForm';
import useIsBreakpoint from '~/hooks/useIsBreakpoint';
import { Button } from '~ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~ui/collapsible';


function FrontPage() {
  const [isExpanded, setIsExpanded] = useState(true);
  const isXl = useIsBreakpoint('xl');

  return (
    <div className="flex flex-col xl:flex-row">
      <aside className="w-full xl:w-96 xl:sticky xl:h-main-content bg-background top-header left-0 xl:border-r pt-4">
        <Collapsible
          open={isExpanded || isXl}
          className="max-w-3xl mx-auto px-8 self-center xl:self-start flex flex-col gap-2"
        >
          <CollapsibleTrigger asChild>
            <Button className="xl:hidden self-end" variant="outline" onClick={() => setIsExpanded(b => !b)}>
              {isExpanded ? 'Esconder' : 'Mostrar'} busca
              {isExpanded ? <ChevronsDownUp /> : <ChevronsUpDown />}
            </Button>
          </CollapsibleTrigger>

          <CollapsibleContent asChild>
            <SearchForm className="border px-8 py-4 rounded-md xl:border-none" />
          </CollapsibleContent>
        </Collapsible>
      </aside>

      <main className="p-6 xl:px-16 xl:py-8 grow">
        <Desaparecidos className="max-w-[96rem] mx-auto" />
      </main>
    </div>
  )
}

export default FrontPage;
