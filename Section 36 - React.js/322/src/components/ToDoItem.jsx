import React, { useState } from "react";

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false)

    function handleClick() {
        setIsDone(true) 
    }
    
    return (
        <div>
            <li onClick={handleClick} style={isDone && { textDecoration: "line-through" }}>{props.text}</li>
        </div>
    )    
}

export default ToDoItem;
