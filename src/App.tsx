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
    <div>
      <header>
        <nav className="fixed top-0 left-0 w-full z-50 border-b bg-background/90 p-2 backdrop-blur-sm">
          <NavigationMenuDemo />
        </nav>
      </header>
      <main className='flex-grow pt-16'>
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
