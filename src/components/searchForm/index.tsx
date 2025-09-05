import { zodResolver } from "@hookform/resolvers/zod";
import { UserRoundSearch } from 'lucide-react';
import { useForm } from "react-hook-form";

import { GeneroInput } from '~/components/searchForm/generoInput.tsx';
import { IdadeInput } from '~/components/searchForm/idadeInput.tsx';
import { NomeInput } from '~/components/searchForm/nomeInput.tsx';
import { type SearchFormParams, searchFormSchema } from '~/components/searchForm/schema.tsx';
import { StatusInput } from '~/components/searchForm/statusInput.tsx';

import { searchFormToApiQuery } from '~/lib/converters.ts';
import { desaparecidosQueryActions } from '~/state/slices/desaparecidosQuerySlice.ts';
import { useAppDispatch } from '~/state/store.ts';

import { Button } from "~ui/button.tsx";
import { Form } from "~ui/form.tsx";


function SearchForm() {
  const form = useForm<SearchFormParams>({ resolver: zodResolver(searchFormSchema) });
  const appDispatch = useAppDispatch();

  function onSubmit(values: SearchFormParams) {
    const query = searchFormToApiQuery(values);
    appDispatch(desaparecidosQueryActions.update(query));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-3xl mx-auto py-10">
        <NomeInput control={form.control} />
        <IdadeInput control={form.control} />
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <GeneroInput control={form.control} />
          </div>
          <div className="col-span-6">
            <StatusInput control={form.control} />
          </div>
        </div>
        <div className="flex justify-end">
          <Button type="submit">
            Buscar
            <UserRoundSearch />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default SearchForm;
