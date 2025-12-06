import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.text().then((text) => setData(text)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <p>{data}</p>
    </>
  );
}

export default App;
