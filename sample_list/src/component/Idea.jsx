import React, { useState } from "react";

function Idea() {
  const [titleChange, setTitleChange] = useState("");
  const [descriptionChange, setDescriptionChange] = useState("");

  function handleTitleChange(e) {
    setTitleChange(e.target.value);
  }
  function handleDescriptionChange(e) {
    setDescriptionChange(e.target.value);
  }

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

      <p>{titleChange}</p>
      <p>{descriptionChange}</p>
    </div>
  );
}

export default Idea;
