import React from "react";
import { googleLogout } from "@react-oauth/google";
function MainPage({ user }) {
  const [user, setUser] = useState(null);

  // Track login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

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
    <div>
      <>
        <p className="text-white">Welcome, {user.displayName}</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-400 text-white font-semibold px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </>
    </div>
  );
}

export default MainPage;
