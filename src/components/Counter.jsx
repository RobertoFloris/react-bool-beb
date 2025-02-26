import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(null)
  const decrement = () => {
    if (count !== null && count > 1) {
      setCount(count - 1);
    } else {
      setCount(null);
    }
  };

  const increment = () => {
    setCount(count === null ? 1 : count + 1);
  };

  return (
    <div className="flex items-center gap-3">
      <button className="rounded-xl bg-stone-200 px-2" onClick={decrement}>-</button>
      <p>{count === null ? "qualsiasi" : count}</p>
      <button className="rounded-xl bg-stone-200 px-2" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
