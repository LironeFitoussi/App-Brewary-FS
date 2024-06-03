import React from "react";

function Note({setNotes, ...props}) {
  const handleDeleteNote = () => {
    setNotes(prevNotes => {
      return prevNotes.filter((note, index) => {
        return index !== props.id;
      });
    });
  }
  
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDeleteNote}>DELETE</button>
    </div>
  );
}

export default Note;
