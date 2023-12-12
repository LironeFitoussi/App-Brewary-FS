import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form userReg={userIsRegistered}/>
    </div>
  );
}

export { userIsRegistered };
export default App;
