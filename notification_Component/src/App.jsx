import { useState } from "react";

import "./App.css";
import { Bell } from "lucide-react";
import Modal_Notification from "./Component/Modal_Notification";

const notification = [
  "Hello how is your day",
  "Nice Game previosly",
  "Goodluck next game",
];

function App() {
  const [info, setInfo] = useState(false);
  const [notifCount, setNotifCount] = useState(notification.length);

  function showInfo() {
    setInfo(!info);
  }
  return (
    <>
      <div>
        <button onClick={showInfo}>
          <Bell /> {notifCount}
        </button>
        {info && <Modal_Notification messages={notification} />}
      </div>
    </>
  );
}

export default App;
