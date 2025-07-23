import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment(): void {
    setCount(count + 1);
  }

  function decrement(): void {
    if (count > 0){
          setCount(count - 1);
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-bold mb-4'>Counter: {count}</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' type="button" onClick={increment}>
        Increment
      </button>
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
