import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserProvider from "./context/UserProvider";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserProvider>
      <h1>Welcome to the App</h1>
      <Login />
      <UserProfile />
    </UserProvider>
  );
}

export default App;
