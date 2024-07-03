import { useState } from "react";
import "./styles.css";
import Button from "../Button/Button";

function Counter() {
  const state = useState(0);

  const [count, setCount] = state;

  const onPlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };

  const onMinus = () => {
    setCount((prevValue) => {
      return prevValue - 1;
    });
  };

  console.log(state);

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} buttonClass={"main"} />
      </div>
    </div>
  );
}

export default Counter;
