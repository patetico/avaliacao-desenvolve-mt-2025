import { zodResolver } from "@hookform/resolvers/zod";
import { UserRoundSearch } from 'lucide-react';
import { useForm } from "react-hook-form";

import { GeneroInput } from '~/components/searchForm/generoInput';
import { IdadeInput } from '~/components/searchForm/idadeInput';
import { NomeInput } from '~/components/searchForm/nomeInput';
import { type SearchFormParams, searchFormSchema } from '~/components/searchForm/schema';
import { StatusInput } from '~/components/searchForm/statusInput';

import { searchFormToApiQuery } from '~/lib/converters';
import { desaparecidosQueryActions } from '~/state/slices/desaparecidosQuerySlice';
import { useAppDispatch } from '~/state/store';

import { Button } from "~ui/button";
import { Form } from "~ui/form";


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
