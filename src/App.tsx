import { Card, CardContent } from '@/components/ui/card';
import '@/public/styles/globals.css';
import { Counter, CounterDisplay } from './components/shared';
import { useState } from 'react';
import { ProfileCard,DragonBallCharacterCard, CounterZustand} from './components/shared';
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
    <div className="container mx-auto p-8 text-center relative z-10 grid grid-cols-1 gap-10">

      {/* <ProfileCard src={profileData.image} name={profileData.name} description={profileData.description} linkedin={profileData.socialMedia[1].url} github={profileData.socialMedia[0].url} /> */}
      <nav>
        <ul className='flex gap-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter Zustand</Link>
          </li>
          <li>
            <Link to="/card">Use Memo Card</Link>
          </li>
        </ul>
      </nav>

    <Routes>
      <Route path='/counter' element={<CounterZustandPage />} />
      <Route path='/card' element={<UseMemoCardPage />} />
    </Routes>
    </div>
  );
}

export default App;
