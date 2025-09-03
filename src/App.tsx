import SearchForm from '~/components/searchForm';
import ThemeProvider from '~/components/themeProvider';
import PageHeader from './components/pageHeader';


function App() {
  return (
    <ThemeProvider>
      <PageHeader className="sticky bg-background top-0 z-50">
        <h1 className="text-2xl font-bold">
          Busca de pessoas desaparecidas
        </h1>
      </PageHeader>

      <div className="flex flex-col lg:flex-row lg:min-h-[calc(100lvh-var(--header-height))]">
        <aside className="sticky top-(--header-height) lg:h-[calc(100lvh-var(--header-height))] lg:border-r px-8 py-4 w-96">
          <SearchForm />
        </aside>

        <main className="px-16 py-8">
          {/* TODO: <DesaparecidosList /> */}
        </main>
      </div>

      {/* TODO: <PageFooter /> */}
    </ThemeProvider>
  )
}

export default App
