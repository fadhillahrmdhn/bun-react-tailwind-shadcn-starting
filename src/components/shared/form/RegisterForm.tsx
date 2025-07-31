import { useForm } from '@tanstack/react-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { BirthDate, SelectDemo } from '@/components/shared';
import type { RegisterFormValues } from '@/interfaces/form-register.interface';

export default function RegisterForm() {
  const defaultValues: RegisterFormValues = {
    name: '',
    email: '',
    password: '',
    age: 0,
    birthDate: undefined,
    gender: '',
  };

  const form = useForm({
    defaultValues,

    onSubmit: async ({ value }) => {
      toast.success('Registration Successful!', {
        description: `Welcome, ${value.name}! Your account has been created.`,
        duration: 3000,
      });
      console.log(`Name: ${value.name}\nEmail: ${value.email}\nPassword: ${value.password}\nAge: ${value.age}\nBirth Date: ${value.birthDate?.toLocaleDateString('en-CA')}\nGender: ${value.gender}`);
    },
  });

  return (
    <Card className="max-w-sm mx-auto mt-10 shadow-xl">
      <CardHeader>
        <CardTitle>Register</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* NAME FIELD */}
          <form.Field name="name">
            {(field) => (
              <div className="grid gap-1">
                <Label className="text-left" htmlFor="name">
                  Name
                </Label>
                <Input id="name" type="text" value={field.state.value} onChange={(e) => field.handleChange(e.target.value)} />
              </div>
            )}
          </form.Field>

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

          {/* AGE FIELD */}
          <form.Field name="age">
            {(field) => (
              <div className="grid gap-1">
                <Label className="text-left" htmlFor="age">
                  Age
                </Label>
                <Input id="age" type="number" value={field.state.value} onChange={(e) => field.handleChange(Number(e.target.value))} />
              </div>
            )}
          </form.Field>

          {/* BIRTH DATE FIELD */}
          <form.Field name="birthDate">
            {(field) => (
              <div className="grid gap-1">
                <Label className="text-left" htmlFor="birthDate">
                  Birth Date
                </Label>
                <BirthDate id="birthDate" value={field.state.value} onChange={(date) => field.handleChange(date)} />
              </div>
            )}
          </form.Field>
          
          {/* Gender */}
          <form.Field name="gender">
            {(field) => (
              <div className="grid gap-1">
                <Label className="text-left">
                  Gender
                </Label>
                <SelectDemo value={field.state.value} onChange={(value) => field.handleChange(value as 'male' | 'female')} />
              </div>
            )}
          </form.Field>


          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
