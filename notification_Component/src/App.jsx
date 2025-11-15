import { useState } from "react";

import "./App.css";
import { Bell } from "lucide-react";
import Modal_Notification from "./Component/Modal_Notification";

function App() {
  const [info, setInfo] = useState(false);
  const [notifCount, setNotifCount] = useState(3);
  function showInfo() {
    setInfo(!info);
  }
  return (
    <>
      <div>
        <button onClick={showInfo}>
          <Bell />
        </button>
        {info && <Modal_Notification count={notifCount} />}
      </div>
    </>
  );
}

export default App;
