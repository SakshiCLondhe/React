import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  createContext
} from "react";

// Context Example
const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="🌍 Hello Context!">
      <MiniProject />
    </MyContext.Provider>
  );
}

function MiniProject() {
  // useState + useEffect
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  // useContext
  const ctxValue = useContext(MyContext);

  // useReducer
  const reducer = (state, action) => {
    if (action.type === "inc") return state + 1;
    return state;
  };
  const [rCount, dispatch] = useReducer(reducer, 0);

  // useCallback + useMemo
  const memoFn = useCallback(() => console.log("Callback: ", count), [count]);
  const expensive = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1e4; i++) sum += i; // reduced loop
    return sum + count;
  }, [count]);

  // useRef
  const inputRef = useRef();
  const focusInput = () => inputRef.current.focus();

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>⚡ React Hooks implementation</h2>

      {/* useState + useEffect */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* useContext */}
      <h4>Context: {ctxValue}</h4>

      {/* useReducer */}
      <p>Reducer Count: {rCount}</p>
      <button onClick={() => dispatch({ type: "inc" })}>Reducer +1</button>

      {/* useCallback */}
      <button onClick={memoFn}>Run useCallback</button>

      {/* useMemo */}
      <p>Expensive Value: {expensive}</p>

      {/* useRef */}
      <input ref={inputRef} placeholder="Focus me with button" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
