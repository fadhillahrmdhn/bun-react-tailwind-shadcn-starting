import { useForm } from '@tanstack/react-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';
import type { LoginFormValues } from '@/interfaces';
import { z } from 'zod';
import { api2 } from '@/lib';
import Cookies from 'js-cookie';

const userSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .max(24, { message: 'Password must not exceed 24 characters' })
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).+$/, { message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' }),
  rememberMe: z.boolean(),
});

export default function LoginForm() {
  // dibawah ini merupakan nilai default untuk form login dengan cara memanggil userSchema.parse({})
  const defaultValues: LoginFormValues = {
    email: '',
    password: '',
    rememberMe: false,
  };

  const form = useForm({
    defaultValues,
    validators: {
      onChange: userSchema,
    },

    onSubmit: async ({ value }) => {
      api2
        .post('/auth/login', value)
        .then((response) => {
          const token: string = response.data.data.accessToken;
          // localStorage.setItem('accessToken', token);
          // console.log('Token saved:', response.data.data.accessToken);

          /**
           * @remarks
           * `{expires?: number}` mendefinisikan sebuah objek yang boleh memiliki
           * (atau tidak memiliki) properti bernama `expires`. Jika properti tersebut
           * ada, nilainya harus berupa angka.
           */
          const cookieOptions: { expires?: number } = {};
          if (value.rememberMe) {
            cookieOptions.expires = 7;
          }
          Cookies.set('accessToken', token, cookieOptions);
          toast.success('Login Successful!', {
            description: `Welcome,You have successfully logged in.`,
            duration: 3000,
          });
        })
        .catch((error) => {
          toast.error('Login Failed!', {
            description: `Please check your credentials and try again.`,
            duration: 3000,
          });
        });
      console.log('Form submitted:', value);
    },
  });

  return (
    <Card className="max-w-sm mx-auto mt-10 shadow-xl">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* EMAIL FIELD */}
          <form.Field name="email">
            {(field) => (
              <div className="grid gap-1">
                <Label className="text-left" htmlFor="email">
                  Email
                </Label>
                <Input id="email" type="email" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
              </div>
            )}
          </form.Field>

          {/* PASSWORD FIELD */}
          <form.Field name="password">
            {(field) => (
              <div className="grid gap-1">
                <Label className="text-left" htmlFor="password">
                  Password
                </Label>
                <Input id="password" type="password" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
              </div>
            )}
          </form.Field>

          {/* Remember Me */}
          <form.Field name="rememberMe">
            {(field) => {
              return (
                <div className="grid gap-2">
                  <Label className="text-left">Remember Me</Label>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id="rememberMe"
                        checked={field.state.value}
                        onCheckedChange={(checked) => {
                          const newValue = checked ? true : false;
                          field.handleChange(newValue);
                        }}
                      />
                    </div>
                    <Label className="text-sm" htmlFor="rememberMe">
                      Keep me logged in
                    </Label>
                  </div>
                </div>
              );
            }}
          </form.Field>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
