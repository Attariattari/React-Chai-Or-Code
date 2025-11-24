import { useState } from "react";
import Currency_Converor from "./Components/Currency_Converor";
import usecurrencyInfo from "./Hooks/usecurrencyInfo";
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConertedAmount] = useState(0);

  const currenyInfo = usecurrencyInfo(from);
  const options = Object.keys(currenyInfo || {});

  const swap = () => {
    setFrom((prevFrom) => {
      setTo(prevFrom);
      return to;
    });

    setConertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConertedAmount(amount * currenyInfo[to]);
  };
  return (
    <>
      <h1>Learn about redux toolkit</h1>
    </>
  );
}
export default App;
