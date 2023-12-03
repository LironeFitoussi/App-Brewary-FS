import React from "react";
import ReactDOM from "react-dom";

let timeMsg = "Morning";
let heading = {
  color: "red",
};

const hour = new Date().getHours();

if (12 <= hour && hour < 18) {
  timeMsg = "Afternoon";
  heading.color = "green";
} else if (18 <= hour || hour < 0) {
  timeMsg = "Evening";
  heading.color = "blue";
}

ReactDOM.render(
  <h1 style={heading}> Good {timeMsg}!</h1>,
  document.querySelector("#root"),
);
