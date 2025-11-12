import React, { useState } from "react";

function UserForm() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [description, setDescription] = useState("");

  function handleUserChange(e) {
    setUser(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function userInfoSubmit(firstVal, secondVal) {
    setData((prevData) => {
      return [...prevData, { firstVal: user, secondVal: description }];
    });
  }

  return (
    <div>
      <form action="">
        <p>UserName</p>
        <input type="text" onChange={handleUserChange} />
        <p>Description</p>
        <input type="text" onChange={handleDescriptionChange} />
        <button type="submit" onClick={() => userInfoSubmit(user, description)}>
          Submit
        </button>
      </form>
      {data.map((userData, index) => (
        <li key={index}>
          {userData.user} , {userData.description}
        </li>
      ))}
    </div>
  );
}

export default UserForm;
