//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const myName = "Lirone Fitoussi";
const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.querySelector("#root"),
);
