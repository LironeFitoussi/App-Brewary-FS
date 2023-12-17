import React, { useState }  from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue)
  }
  
  function addItem(e){
    setItems((preVal) => {
      return[...preVal, inputText]
    })
    setInputText("")
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>A Item</li>
          {items.map(item => <li>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
