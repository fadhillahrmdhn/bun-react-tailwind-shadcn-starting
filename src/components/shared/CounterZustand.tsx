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
    <div>
      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardContent className="pt-6">
          <CounterDisplay count={count} />
          <Counter reset={reset} onIncrement={increment} onDecrement={decrement} />
        </CardContent>
      </Card>
    </div>
  );
};
