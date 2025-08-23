import {LoginForm} from '@/components/shared';
import AuthLayout from '@/page/auth/AuthLayout';


export const LoginPage = () => {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    );
}