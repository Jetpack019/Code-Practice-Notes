import "./App.css";
import AccountLogin from "./components/AccountLogin";
import AccountSignUp from "./components/AccountSignUp";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // parent layout
    children: [
      { path: "login", element: <AccountLogin /> },
      { path: "signup", element: <AccountSignUp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
