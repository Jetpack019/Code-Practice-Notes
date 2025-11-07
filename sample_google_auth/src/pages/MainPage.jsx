import React from "react";
import { googleLogout } from "@react-oauth/google";
function MainPage() {
  function userOut() {
    googleLogout();
  }
  return (
    <div>
      MainPage
      <button onClick={userOut}>LogoutUser</button>
    </div>
  );
}

export default MainPage;
