//import { Button } from "./button";

import { useState } from "react";

export function ButtonCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <div>
      <h4 className="text-xl">{count}</h4>
      <button
        onClick={handleIncrement}
        className="rounded-lg bg-amber-950 px-2 py-1 text-xs font-bold text-stone-50"
      >
        Increment
      </button>
    </div>
  );
}
