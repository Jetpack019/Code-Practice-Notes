import React from "react";
import classes from "./Modal_Notification.module.css";
function Modal_Notification({ count }) {
  return (
    <div className={classes.notification}>
      <p>You have {count} notifications</p>
    </div>
  );
}

export default Modal_Notification;
