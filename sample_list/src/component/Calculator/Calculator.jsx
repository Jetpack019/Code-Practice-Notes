import React, { useState } from "react";
import classes from "./Calculator.module.css";

function Calculator() {
  const [numCal, setNumCal] = useState([]);
  const [totalVal, setTotalVal] = useState(0);
  const [operation, setOperation] = useState(null);

  function handleNumVal(numvalue) {
    setNumCal((prevNum) => [...prevNum, numvalue]);
  }

  function handleOperation(op) {
    const currentNum = Number(numCal.join(""));
    if (totalVal === 0) {
      setTotalVal(currentNum);
    } else if (operation) {
      if (operation === "+") setTotalVal((prev) => prev + currentNum);
      if (operation === "-") setTotalVal((prev) => prev - currentNum);
      if (operation === "x") setTotalVal((prev) => prev * currentNum);
      if (operation === "/") setTotalVal((prev) => prev / currentNum);
    }
    setNumCal([]);
    setOperation(op);
  }

  function handleEqual() {
    const currentNum = Number(numCal.join(""));
    if (operation === "+") setTotalVal((prev) => prev + currentNum);
    if (operation === "-") setTotalVal((prev) => prev - currentNum);
    if (operation === "x") setTotalVal((prev) => prev * currentNum);
    if (operation === "/") setTotalVal((prev) => prev / currentNum);
    setNumCal([]);
    setOperation(null);
  }

  function handleClear() {
    setNumCal([]);
    setOperation(null);
    setTotalVal(0);
  }

  return (
    <div>
      <p>{numCal.join("")}</p>
      <p>{totalVal}</p>
      <div className={classes.container}>
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("x")}>x</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <button onClick={handleEqual}>=</button>{" "}
        <button onClick={handleClear}>Clear</button>
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
