import { useState } from "react";


function App() {
  const addValue = () => {
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  const reset = () => {
    setCounter(counter = 0)
  }
  let [counter, setCounter] = useState(0)
  return (
    <div style={{ margin: "auto", display: "block", textAlign: "center", padding: '0px 10px', }}>
      <h1>Hello React App</h1>
      <h1>Counter Value {counter}</h1>
      <button onClick={addValue}>Add</button><br />
      <button onClick={removeValue}>Remove</button>
      <button onClick={reset}>Remove</button>
    </div>
  );
}

export default App;
