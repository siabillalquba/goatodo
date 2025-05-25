import { Button } from "./button";

import { useState } from "react";

export function ButtonCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h4 className="text-xl">{count}</h4>
      <Button onClick={handleIncrement}>Increment</Button>

      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
}
