import { useState } from "react";

const Counter = function() {

    let [count, setCount] = useState(0);

    function handleIncrement() {
        setCount(count += 1);
        console.log(count);
      }
    
      function handleDecrement() {
        setCount(count -= 1);
        console.log(count);
      }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}> Increment </button>
            <button onClick={handleDecrement}> Decrement </button>
        </div>
    )
}

export default Counter;