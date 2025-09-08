import { Link, Outlet } from 'react-router';
import PageHeader from '~/components/pageHeader.tsx';
import ThemeProvider from '~/components/themeProvider';


function FrontPage() {
  return (
    <ThemeProvider>
      <PageHeader className="sticky bg-background top-0 left-0 z-50">
        <h1 className="text-2xl font-bold">
          <Link to="/">
            Pessoas desaparecidas
          </Link>
        </h1>
      </PageHeader>

      <Outlet />

      {/* TODO: <PageFooter /> */}
    </ThemeProvider>
  );
}

export default FrontPage;
