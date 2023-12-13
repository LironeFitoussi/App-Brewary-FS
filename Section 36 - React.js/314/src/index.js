// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";

const root = ReactDOM.createRoot(document.getElementById("root"));

const [honda, tesla] = cars;
const {
  speedStats: { topSpeed: teslaTopSpeed },
  coloursByPopularity: [teslaTopColour],
} = tesla;
const {
  speedStats: { topSpeed: hondaTopSpeed },
  coloursByPopularity: [hondaTopColour],
} = honda;

console.log(honda);

root.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>
);
