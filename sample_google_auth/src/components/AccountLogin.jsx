import React, { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import AccountLoginForm from "./AccountLoginForm";
import MainPage from "../pages/MainPage";

function AccountLogin() {
  const [user, setUser] = useState(null);

  // Login
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Google Sign-In error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {user ? (
        <MainPage user={user} />
      ) : (
        <div>
          <AccountLoginForm />
          <button
            onClick={handleGoogleSignIn}
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-md"
          >
            Sign in with Google
          </button>
        </div>
      )}
    </div>
  );
}

export default AccountLogin;
