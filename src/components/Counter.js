import React, { useState } from 'react';

const Counter = () => {
const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
    return (
      <div>
        <div>Count - {count}</div>
        <button onClick={() => increment()}>Increment</button>
      </div>
    );
}
export default Counter;
