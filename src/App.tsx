import SearchForm from '~/components/searchForm';
import ThemeProvider from '~/components/themeProvider';


function App() {

  return (
    <ThemeProvider>
      {/* TODO: <PageHeader /> */}
      <div className="flex flex-col lg:flex-row">
        <aside className="md:border-r px-8 py-4">
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
