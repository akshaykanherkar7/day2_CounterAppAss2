import React, { useState } from "react";
import styles from "../App.module.css";

let Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <h1 className={count % 2 === 1 ? `${styles.red}` : `${styles.green}`}>
        {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(count * 2)}>double</button>
    </>
  );
};

export default Counter;
