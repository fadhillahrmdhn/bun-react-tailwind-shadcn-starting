interface CounterButtonsProps {
  onIncrement: () => void;
  onDecrement: () => void;
  reset: () => void;
}


export  function Counter({ onIncrement, onDecrement, reset }: CounterButtonsProps) {
  return (
    <div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2" type="button" onClick={onIncrement}>
        Increment
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={onDecrement}>
        Decrement
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" type="button" onClick={reset}>Reset</button>
    </div>
  );
}
