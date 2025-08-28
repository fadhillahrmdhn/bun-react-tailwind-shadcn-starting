import { createFileRoute, redirect } from '@tanstack/react-router';
import { DashboardPage } from '@/page/dashboard/DashboardPage';
import type { CookieType } from '@/types';
import Cookies from 'js-cookie';
import { useAuthStore } from '@/store';
import { toast } from 'sonner';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: authCheck,
  component: dashboard,
});

function dashboard() {
  return (
      <DashboardPage />
  );
}

async function authCheck({ location }) {
  const cookieName: CookieType = 'accessToken';
  const token = Cookies.get(cookieName);

  if (!token) {
    throw redirect({
      to: '/login',
      search: {
        redirect: location.pathname,
      },
    });
  }

  const { isAuthenticated, checkAuth } = useAuthStore.getState();
  if (!isAuthenticated) {
    try {
      await checkAuth();
    } catch (error) {
      console.error('Authentication check failed:', error);
      toast.error('Your session is invalid or has expired. Please log in again.');
      throw redirect({
        to: '/login',
        search: {
          redirect: location.pathname,
        },
      });
    }
  }
}
