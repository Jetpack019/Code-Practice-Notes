import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal_Notification from "./Component/Modal_Notification";

function App() {
  const [info, setInfo] = useState(false);

  function showInfo() {
    <Modal_Notification />;
  }
  return (
    <>
      <div>
        <button onClick={showInfo}>{<Bell />} </button>
      </div>
    </>
  );
}

export default App;
