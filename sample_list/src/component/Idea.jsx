import React, { useState } from "react";

function Idea() {
  const [listData, setListData] = useState([]);
  const [titleChange, setTitleChange] = useState("");
  const [descriptionChange, setDescriptionChange] = useState("");

  function handleTitleChange(e) {
    setTitleChange(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescriptionChange(e.target.value);
  }

  function showListData(firstVal, secondVal) {
    setListData((prevData) => {
      return [...prevData, { title: firstVal, description: secondVal }];
    });
    setTitleChange("");
    setDescriptionChange("");
  }

  const isDisabled =
    titleChange.trim() === "" || descriptionChange.trim() === "";

  return (
    <div>
      <input
        type="text"
        name="title"
        id=""
        value={titleChange}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        name="description"
        id=""
        value={descriptionChange}
        onChange={handleDescriptionChange}
      />
      <button
        onClick={() => showListData(titleChange, descriptionChange)}
        disabled={isDisabled}
      >
        Show Items
      </button>
      <p>{titleChange}</p>
      <p>{descriptionChange}</p>
      {listData.map((data, index) => (
        <li key={index}>
          {data.title} - {data.description}
        </li>
      ))}
    </div>
  );
}

export default Idea;
