import React, { useState } from "react";

function App() {
  const [headingText, headingSet] = useState("Hello")
  function handleChange(e) {
    console.log(e.target.value.substr(length - 1));
    headingSet(e.target.value)
  }
  
  return (
    <div className="container">
      <h1> Hello {headingText}! </h1>
      <input id="myBtn" onChange={handleChange} type="text" placeholder="What's your name?" />
      <button>Submit</button>
    </div>
  );
}

export default App;
