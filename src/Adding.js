import React, { useState } from "react";

export default function Adding() {
  // Declare a new state variable, which we will call "count"
  const [count, setCount] = useState(0);
  return (
    <div className="state">
      <p>It has been clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(count - 1)}>Click me</button>
    </div>
  );
}
