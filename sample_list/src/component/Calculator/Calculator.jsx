import React, { useState } from "react";
import classes from "./Calculator.module.css";

function Calculator() {
  const [numCal, setNumCal] = useState([]);
  const [totalVal, setTotalVal] = useState(0);

  function handleNumVal(numvalue) {
    setNumCal((prevNum) => [...prevNum, numvalue]);
  }

  function totalValCompute(operation_Value) {
    const currentNum = Number(numCal.join(""));

    setTotalVal((prevVal) => {
      if (operation_Value === "+") {
        return prevVal + currentNum;
      }
      if (operation_Value === "-") {
        return prevVal - currentNum;
      }
      if (operation_Value === "x") {
        return prevVal * currentNum;
      }
      if (operation_Value === "/") {
        return prevVal / currentNum;
      }
      if (operation_Value === "=") {
        return prevVal / currentNum;
      }
      return prevVal;
    });

    setNumCal([]);
  }

  return (
    <div>
      <p>{numCal.join("")}</p>
      <p>{totalVal}</p>
      <div className={classes.container}>
        <button onClick={() => totalValCompute("+")}>+</button>
        <button onClick={() => totalValCompute("-")}>-</button>
        <button onClick={() => totalValCompute("x")}>x</button>
        <button onClick={() => totalValCompute("/")}>/</button>
        <button onClick={() => totalValCompute("=")}>/</button>
        <button onClick={() => handleNumVal(1)}>1</button>
        <button onClick={() => handleNumVal(2)}>2</button>
        <button onClick={() => handleNumVal(3)}>3</button>
        <button onClick={() => handleNumVal(4)}>4</button>
        <button onClick={() => handleNumVal(5)}>5</button>
        <button onClick={() => handleNumVal(6)}>6</button>
        <button onClick={() => handleNumVal(7)}>7</button>
        <button onClick={() => handleNumVal(8)}>8</button>
        <button onClick={() => handleNumVal(9)}>9</button>
        <button onClick={() => handleNumVal(0)}>0</button>
      </div>
    </div>
  );
}

export default Calculator;
