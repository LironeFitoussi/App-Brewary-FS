import React, { useState } from "react";

function App() {
  const [headingText, setHandingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handelClick() {
    setHandingText("Submited");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{ backgroundColor: isMouseOver? "black" : "white" }}
        onClick={handelClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
