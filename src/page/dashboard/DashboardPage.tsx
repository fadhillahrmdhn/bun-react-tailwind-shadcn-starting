import Typewriter from 'typewriter-effect';
import AuthLayout from '@/page/auth/AuthLayout';
import { DragonBall } from '@/components/shared';


export const DashboardPage = () => {
    return (
    <AuthLayout>
      <DragonBall />
    </AuthLayout>
    );
}