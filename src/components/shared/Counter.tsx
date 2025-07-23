import { useState } from 'react';

interface CounterButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

interface CounterProps extends CounterButtonsProps {
  count: number;
}

export default function Counter({ count, onIncrement, onDecrement }: CounterProps) {
  return (
    <div>
      <CounterDisplay count={count} />
      <CounterButtons onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
}

export function CounterDisplay({ count }: { count: number }) {
  return <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>;
}

export function CounterButtons({ onIncrement, onDecrement }: CounterButtonsProps) {
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" type="button" onClick={onIncrement}>
        Increment
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={onDecrement}>
        Decrement
      </button>
    </>
  );
}
