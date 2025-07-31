import { useForm } from '@tanstack/react-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { BirthDate, SelectDemo } from '@/components/shared';
import { Checkbox } from '@/components/ui/checkbox';
import type { RegisterFormValues } from '@/interfaces/form-register.interface';

export default function RegisterForm() {
  const defaultValues: RegisterFormValues = {
    name: '',
    email: '',
    password: '',
    age: 0,
    birthDate: undefined,
    gender: '',
    learningPath: [],
  };

  const learningPaths = [
    {
      id: 'frontend',
      label: 'Frontend',
    },
    {
      id: 'backend',
      label: 'Backend',
    },
    {
      id: 'devops',
      label: 'DevOps',
    },
    {
      id: 'uiux',
      label: 'UI/UX',
    },
  ];

  const form = useForm({
    defaultValues,

    onSubmit: async ({ value }) => {
      toast.success('Registration Successful!', {
        description: `Welcome, ${value.name}! Your account has been created.`,
        duration: 3000,
      });
      console.log(
        `Name: ${value.name}\nEmail: ${value.email}\nPassword: ${value.password}\nAge: ${value.age}\nBirth Date: ${value.birthDate?.toLocaleDateString('en-CA')}\nGender: ${value.gender}\nLearning Path: ${value.learningPath.join(', ')}`
      );
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
                <Label className="text-left">Gender</Label>
                <SelectDemo value={field.state.value} onChange={(value) => field.handleChange(value as 'male' | 'female')} />
              </div>
            )}
          </form.Field>

          {/* Learning Path */}
          <form.Field name="learningPath">
            {(field) => {
              return (
                <div className="grid gap-2">
                  <Label className="text-left">Learning Path</Label>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                    {learningPaths.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <Checkbox
                          id={item.id}
                          checked={field.state.value.includes(item.id)}
                          onCheckedChange={(checked) => {
                            const newValue = checked ? [...field.state.value, item.id] : field.state.value.filter((v) => v !== item.id);
                            field.handleChange(newValue);
                          }}
                        />
                        <Label htmlFor={item.id} className="font-normal">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }}
          </form.Field>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
