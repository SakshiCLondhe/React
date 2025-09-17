import React, { useState, useEffect } from "react";

function Counter() { // fuctional component
  const [count, setCount] = useState(0);// useState () 

  useEffect(() => { //fuction
    document.title = `You clicked ${count} times`;//
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default Counter;
