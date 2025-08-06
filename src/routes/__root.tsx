import { createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/public/styles/globals.css';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <ThemeProvider>
      <main className="container mx-auto p-8 text-center relative z-10">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
