import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createContact(props) {
  return (
    <Card
      key={props.id}
      id={props.id}
      name={props.name}
      img={props.imgURL}
      tel={props.phone}
      email={props.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createContact)}

    </div>
  );
}

export default App;
