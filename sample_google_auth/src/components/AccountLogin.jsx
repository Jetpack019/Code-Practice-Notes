import React, { useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import AccountLoginForm from "./AccountLoginForm";

function AccountLogin() {
  const [user, setUser] = useState(null);

  // Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Login
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Google Sign-In error:", error.message);
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {user ? (
        <>
          <p className="text-white">Welcome, {user.displayName}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </>
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
