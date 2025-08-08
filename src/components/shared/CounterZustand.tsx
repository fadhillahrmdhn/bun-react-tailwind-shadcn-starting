import { useCounterStore } from '@/store';
import { Card, CardContent } from "../ui/card";
import { Counter, CounterDisplay } from '@/components/shared';
import { useShallow } from 'zustand/react/shallow';

export const CounterZustand = () => {
  const { count, increment, decrement, reset } = useCounterStore(
    useShallow((state)=>({
        count: state.count,
        increment: state.increment,
        decrement: state.decrement,
        reset: state.reset,
    }))
  );
  return (
      <Card className="bg-card/50 backdrop-blur-sm border-muted w-[400px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <CardContent className="pt-6">
          <CounterDisplay count={count} />
          <Counter reset={reset} onIncrement={increment} onDecrement={decrement} />
        </CardContent>
      </Card>
  );
};
