import { Card, CardContent } from '@/components/ui/card';
import '@/public/styles/globals.css';
// import { Counter, CounterDisplay } from './components/shared';
// import { useState } from 'react';
import { ProfileCard } from './components/shared';
import { profileData } from './data';
import  RegisterForm  from './components/shared/form/RegisterForm';
import { Toaster } from './components/ui/sonner';

export function App() {
  // const [count, setCount] = useState(0);

  // const onIncrement = (): void => setCount(count + 1);

  // const onDecrement = (): void => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // const reset = (): void => setCount(0);
  

  return (
    <div className="container mx-auto p-8 text-center relative z-10">

      {/* <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardContent className="pt-6">
          <CounterDisplay count={count} />
          <Counter reset={reset} onIncrement={onIncrement} onDecrement={onDecrement} />
        </CardContent>
      </Card> */}
      {/* <ProfileCard src={profileData.image} name={profileData.name} description={profileData.description} linkedin={profileData.socialMedia[1].url} github={profileData.socialMedia[0].url} /> */}

      <RegisterForm />
      <Toaster />

    </div>
  );
}

export default App;
