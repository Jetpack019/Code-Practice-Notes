import React, { useState } from "react";
import classes from "./AccountSignUp.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

function AccountSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully");
      navigate("/login");
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleSignUp} className={classes.form}>
        <h2>Sign Up</h2>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">Email:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
      <p className="mt-3 text-sm text-gray-400">
        Already have an account?
        <Link to="/login" className="text-cyan-400 hover:underline">
          Login
        </Link>
      </p>
    </section>
  );
}

export default AccountSignUp;
