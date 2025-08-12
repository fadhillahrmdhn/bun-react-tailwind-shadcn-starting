import { ThemeProvider } from '@/context/ThemeContext';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Navbar } from '@/components/shared';
import '@/public/styles/globals.css';

export const Route = createRootRoute({
  component: () => (
    <>
      <header>
        <nav className="fixed top-0 left-0 w-full z-50 border-b bg-background/90 p-2 backdrop-blur-sm">
          <Navbar />
        </nav>
      </header>
      <ThemeProvider>
        <main className="container mx-auto p-8 pt-20 text-center relative z-10">
          <Outlet />
        </main>
      </ThemeProvider>
      {process.env.NODE_ENV !== "production" && <TanStackRouterDevtools />}
    </>
  ),
});
