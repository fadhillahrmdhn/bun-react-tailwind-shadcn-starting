import Typewriter from 'typewriter-effect';
import AuthLayout from '@/page/auth/AuthLayout';
import { AllUsers} from '@/components/shared';


export const DashboardPage = () => {
    return (
    <AuthLayout>
      <AllUsers />
    </AuthLayout>
    );
}