import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userReg && <input type="password" placeholder="Confirm Password" />}
      <button>{props.userReg? "Register" : "Login"}</button>
    </form>
  );
}

export default Form;
