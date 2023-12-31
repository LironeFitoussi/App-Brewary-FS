import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(e) {
  const {name, value} = e.target;

  setContact(lastVal => {
    switch (name) {
      case "fName" :
        return (
          {
            fName: value,
            lName: lastVal.lName,
            email: lastVal.email,
          }
        )
      case "lName":
        return (
          {
            fName: lastVal.fName,
            lName: value,
            email: lastVal.email,
          }
        )
      
      case "email":
        return (
          {
            fName: lastVal.fName,
            lName: lastVal.lName,
            email: value,
          }
        )

      default:
        break;
    }
  })
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
