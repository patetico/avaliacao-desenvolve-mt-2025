import Desaparecidos from '~/components/desaparecidos';
import SearchForm from '~/components/searchForm';
import ThemeProvider from '~/components/themeProvider';
import PageHeader from './components/pageHeader';


function App() {
  return (
    <ThemeProvider>
      <PageHeader className="sticky bg-background top-0 left-0 z-50">
        <h1 className="text-2xl font-bold">
          Busca de pessoas desaparecidas
        </h1>
      </PageHeader>

      <div className="flex flex-col xl:flex-row">
        <aside className="xl:sticky bg-background top-(--header-height) left-0 xl:h-[calc(100lvh_-_var(--header-height))] xl:border-r px-8 py-4 w-96">
          <SearchForm />
        </aside>

        <main className="p-6 xl:px-16 py-8 grow">
          <Desaparecidos className="max-w-6xl mx-auto py-8" />
        </main>
      </div>

      {/* TODO: <PageFooter /> */}
    </ThemeProvider>
  )
}

export default App
