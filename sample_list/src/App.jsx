import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Idea from "./component/SecondPracticeFast/Idea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Idea />
    </>
  );
}

export default App;
