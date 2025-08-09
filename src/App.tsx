import { Card, CardContent } from '@/components/ui/card';
import '@/public/styles/globals.css';
import { Counter, CounterDisplay } from './components/shared';
import { useState } from 'react';
import { ProfileCard,DragonBallCharacterCard, CounterZustand, NavigationMenuDemo} from './components/shared';
import { profileData } from './data';
import { Routes, Route, Link } from "react-router-dom";
import { CounterZustandPage, UseMemoCardPage } from './pages';



export function App() {
  const [count, setCount] = useState(0);

  const onIncrement = (): void => setCount(count + 1);

  const onDecrement = (): void => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = (): void => setCount(0);
  

  return (
    <div className="min-h-screen">
      <header>
        <nav className=" w-full sticky top-0 z-10  backdrop-blur-sm flex items-center justify-center p-4">
          <NavigationMenuDemo />
        </nav>
      </header>
      <main className='flex-grow'>
        <div className="container mx-auto p-8 text-center">
          <Routes>
            <Route path="/counter" element={<CounterZustandPage />} />
            <Route path="/card" element={<UseMemoCardPage />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
