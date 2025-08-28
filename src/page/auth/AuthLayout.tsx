import { Navbar } from '@/components/shared';

export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-4">{children}
        </main>
      </div>
  );
}
