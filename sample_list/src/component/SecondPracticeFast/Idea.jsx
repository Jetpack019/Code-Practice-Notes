import React, { useState } from "react";

function Idea() {
  const [data, showData] = useState([]);
  const [title, setTitleChange] = useState("");
  const [description, setDescriptionChange] = useState("");

  function handleTitleChange(e) {
    setTitleChange(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescriptionChange(e.target.value);
  }

  function btnShowData(firstVal, secondVal) {
    showData((prevData) => {
      return [...prevData, { title: firstVal, description: secondVal }];
    });
    setTitleChange("");
    setDescriptionChange("");
  }

  const isDisabled = title.trim() === "" || description.trim() === "";
  const winner = "Congratulations your a winner";

  return (
    <div>
      <input type="text" name="title" onChange={handleTitleChange} />
      <input
        type="text"
        name="description"
        id=""
        onChange={handleDescriptionChange}
      />

      <button
        onClick={() => btnShowData(title, description)}
        disabled={isDisabled}
      >
        Show data
      </button>
      {data.map((dataval, index) => (
        <li key={index}>
          {dataval.title === "congrats" ? winner : dataval.title}
          {dataval.description}
        </li>
      ))}
    </div>
  );
}

export default Idea;
