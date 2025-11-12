import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";

function UserForm() {
  const { data, setData } = useContext(UserContext);
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  function handleUserChange(e) {
    setUser(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function userInfoSubmit() {
    if (!user || !description) return;
    setData((prev) => [...prev, { user, description }]);
    setUser("");
    setDescription("");
  }

  return (
    <div>
      <div>
        <p>UserName</p>
        <input type="text" value={user} onChange={handleUserChange} />
        <p>Description</p>
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
        />
        <button onClick={userInfoSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default UserForm;
