import { ThemeProvider } from '@/context/ThemeContext';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import '@/public/styles/globals.css';

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/characters" className="[&.active]:font-bold">
            Characters
          </Link>
          <Link to="/profile" className="[&.active]:font-bold">
            Profile
          </Link>
        </nav>
      </header>
      <ThemeProvider>
        <main className="container mx-auto p-8 text-center relative z-10">
          <Outlet />
        </main>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
