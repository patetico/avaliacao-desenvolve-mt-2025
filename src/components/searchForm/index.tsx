"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GeneroInput } from '~/components/searchForm/generoInput.tsx';
import { IdadeInput } from '~/components/searchForm/idadeInput.tsx';
import { NomeInput } from '~/components/searchForm/nomeInput.tsx';
import { type SearchFormParams, searchFormSchema } from '~/components/searchForm/schema.tsx';
import { StatusInput } from '~/components/searchForm/statusInput.tsx';

import { Button } from "~ui/button.tsx";
import { Form } from "~ui/form.tsx";


function SearchForm() {
  const form = useForm<SearchFormParams>({ resolver: zodResolver(searchFormSchema) });

  function onSubmit(values: SearchFormParams) {
    try {
      console.log(values);
    } catch (error) {
      console.error("Form submission error", error);
    }
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default SearchForm;
