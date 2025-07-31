export interface RegisterFormValues {
    name: string;
    email: string;
    password: string;
    age: number;
    birthDate: Date | undefined;
    gender: 'male' | 'female' | '';
}