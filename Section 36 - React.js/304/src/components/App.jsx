import React from "react";
import emojipedia from "../emojipedia";
import Entery from "./Entery";

function renderEmoji(props) {
  return (
    <Entery 
      key={props.id}
      img={props.emoji}
      name={props.name}
      info={props.meaning}
    />
  )
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(renderEmoji)}
      </dl>
    </div>
  );
};

export default App;
