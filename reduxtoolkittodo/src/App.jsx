import { useState } from "react";
import "./App.css";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learn About Redux Toolkit Todo</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
