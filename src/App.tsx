import { Card, CardContent } from "@/components/ui/card";
import "@/public/styles/globals.css";
import { Counter, CounterDisplay } from "./components/shared";
import { useState } from 'react';

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";

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
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
        />
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardContent className="pt-6">
          <CounterDisplay count={count} />
          <Counter reset={reset} onIncrement={onIncrement} onDecrement={onDecrement} />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
