import { Card, CardContent } from '@/components/ui/card';
import '@/public/styles/globals.css';
import { Counter, CounterDisplay } from './components/shared';
import { useState } from 'react';
import { ProfileCard,DragonBallCharacterCard, CounterZustand} from './components/shared';
import { profileData } from './data';
import { UseMemoCard } from './hooks';



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
      <UseMemoCard />
      <CounterZustand />
    </div>
  );
}

export default App;
