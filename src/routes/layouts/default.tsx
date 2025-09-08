import { ExternalLink, Info } from 'lucide-react';
import { Link, Outlet } from 'react-router';
import PageFooter from '~/components/pageFooter';
import PageHeader from '~/components/pageHeader.tsx';
import ThemeProvider from '~/components/themeProvider';


function FrontPage() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-lvh">
        <PageHeader className="sticky bg-background top-0 left-0 z-50">
          <h1 className="text-2xl font-bold">
            <Link to="/">
              Pessoas desaparecidas
            </Link>
          </h1>
        </PageHeader>

        <div className="flex-1">
          <Outlet />
        </div>

        <PageFooter className="text-sm flex justify-center text-muted-foreground">
          <Info className="size-5" />
          Saiba mais sobre o projeto no
          <a
            href="https://github.com/patetico/avaliacao-desenvolve-mt-2025/"
            className="border-b border-current"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Github'}
            <ExternalLink className="inline-block size-3 mb-1 ml-1" />
          </a>
        </PageFooter>
      </div>
    </ThemeProvider>
  );
}

export default FrontPage;
