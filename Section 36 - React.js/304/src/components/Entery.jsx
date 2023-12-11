import React from "react";

function Entery(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.img}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.info}</dd>
    </div>
  )
    
}

export default Entery;