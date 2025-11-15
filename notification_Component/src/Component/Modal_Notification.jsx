import React from "react";
import classes from "./Modal_Notification.module.css";
function Modal_Notification({ messages }) {
  return (
    <div className={classes.notification}>
      <p>You have {messages.length} notifications</p>

      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
    </div>
  );
}

export default Modal_Notification;
