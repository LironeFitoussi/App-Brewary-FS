import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={img + "?grayscale"} alt="random image" />
    <div>
      {/* <img
        className="food-img"
        src="https://tiffycooks.com/wp-content/uploads/2021/09/Screen-Shot-2021-09-21-at-5.21.37-PM.png"
        alt=""
      />
      <img
        className="food-img"
        src="https://www.chilipeppermadness.com/wp-content/uploads/2023/06/Gochujang-Noodles-Recipe-SQ.jpg"
        alt=""
      />
      <img
        className="food-img"
        src="https://shwetainthekitchen.com/wp-content/uploads/2023/03/vegetable-noodles.jpg"
        alt=""
      /> */}
    </div>
    {/* <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul> */}
  </div>,
  document.getElementById("root"),
);
