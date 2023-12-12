import React from "react";
import Login from "./Login";

let isLoggendIn = false;

// const currentTime = new Date(2023, 12, 12, 9).getHours();
const currentTime = new Date(2023, 12, 12, 18).getHours();

// console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* {isLoggendIn? <h1>Hello</h1> : <Login />} */}
      {currentTime > 12 && <h1>Why are you still working?</h1>}
    </div>
  );
}

export default App;

// ("EXPERESSION1" && "EXPERESSION2") // Output: Boolean 
var x = 5;
if (x > 3 && x < 7) {
  console.log(true);
}