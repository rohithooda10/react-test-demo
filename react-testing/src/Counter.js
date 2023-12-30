import { React, useState } from "react";

function Counter({ initial }) {
  const [count, setCount] = useState(initial);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div style={{ margin: "20px" }}>
      <h1 data-testid="counterHeading">Counter</h1>
      <h1 data-testid="count">{count}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
