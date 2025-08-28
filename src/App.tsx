import '@/public/styles/globals.css';
import type { ReactNode } from 'react';

export function App({ children }: Readonly<{ children: ReactNode }>) {
  return <main className="min-h-screen w-full">{children}</main>;
}

export default App;
