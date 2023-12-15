import React, {useState} from "react";

function App() {

  const [fullName, changeName] = useState({
    fName: "",
    lName: ""
  });

  function handleChange(e) {
    changeName(lastVal => {
      const [value, name] = e.target
      if (name === "fName") {
        return {
          fName: value,
          lName: lastVal.lName,
        }
      } else if (name === "lName"){
        return {
          fName: lastVal.fName,
          lName: value,
        }
      }
    }) 
  };

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={fullName.fName} />
        <input onChange={handleChange} name="lName" placeholder="Last Name" value={fullName.lName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
