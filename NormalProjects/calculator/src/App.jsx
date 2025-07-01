import css from "./css/App.module.css";
import Input from "./components/Input";
import Buttons from "./components/Buttons";
import { useState } from "react";
function App() {
  const [calculatorValue, setCalculatorValue] = useState("");
  function handleButtonClick(e) {
    if(e.target.innerText === "C") {
      setCalculatorValue("");
    } 
    else if(e.target.innerText === "=") {
      try{
        setCalculatorValue(eval(calculatorValue).toString());
      } catch {
        setCalculatorValue("Error");
      }

    }else if(e.target.innerText === "X") {
      setCalculatorValue(calculatorValue.slice(0, calculatorValue.length-1));
    } 
    else {
      setCalculatorValue(calculatorValue + e.target.innerText);
    }
  }
  return (
    <main>
      <div className={css.calculatorContainer}>
        <Input displayValue={calculatorValue}></Input>
        <Buttons handleButtonClick={handleButtonClick}></Buttons>
      </div>
    </main>
  );
}
export default App;
