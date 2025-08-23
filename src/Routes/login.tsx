import { createFileRoute } from '@tanstack/react-router'
import { LoginPage } from '@/page/auth/login/LoginPage';
import App from '@/App';

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function login() {
  return (
      <LoginPage />
  )
}