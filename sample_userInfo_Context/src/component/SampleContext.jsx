import React, { useContext } from "react";
import UserForm from "./UserForm";
import { UserContext } from "./UserProvider";

function SampleContext() {
  const { data } = useContext(UserContext);
  return (
    <div>
      <ul>
        {data.map((userData, index) => (
          <li key={index}>
            {userData.user} , {userData.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SampleContext;
