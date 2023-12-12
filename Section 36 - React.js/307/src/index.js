import React , { StrictMode }from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
