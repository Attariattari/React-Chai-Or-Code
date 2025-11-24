import { useState } from "react";

function App() {
  const [state, setState] = useState(10);
  let counter = 5;

  const addValue = () => {
    if (state >= counter) {
      alert("Value cannot be more than 5");
      return;
    }
    setState(state + 1);
  };
  const removeValue = () => {
    if (state <= 1) {
      alert("Value cannot be less than 1");
    } else {
      setState(state - 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-green">Chai ur Code</h1>
      <h2>Counter Value : {state}</h2>
      <button onClick={addValue}>Add Vallue</button>
      <br />
      <button onClick={removeValue}> Remove Vallue</button>
    </div>
  );
}

export default App;
