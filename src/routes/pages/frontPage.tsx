import Desaparecidos from '~/components/desaparecidos';
import SearchForm from '~/components/searchForm';


function FrontPage() {
  return (
    <div className="flex flex-col xl:flex-row">
      <aside className="xl:sticky bg-background top-(--header-height) left-0 xl:h-[calc(100lvh_-_var(--header-height))] xl:border-r px-8 py-4 w-96">
        <SearchForm />
      </aside>

      <main className="p-6 xl:px-16 xl:py-8 grow">
        <Desaparecidos className="max-w-[96rem] mx-auto" />
      </main>
    </div>
  )
}

export default FrontPage;
