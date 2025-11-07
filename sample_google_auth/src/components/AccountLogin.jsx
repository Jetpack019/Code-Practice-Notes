import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

function AccountLogin() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("User signed in:", result.user);
    } catch (error) {
      console.error("Google Sign-In error:", error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-semibold px-4 py-2 rounded-md"
    >
      Sign in with Google
    </button>
  );
}

export default AccountLogin;
