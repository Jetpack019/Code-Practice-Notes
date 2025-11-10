import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Sign Up</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
