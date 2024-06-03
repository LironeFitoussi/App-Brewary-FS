import React, {useState, useEffect} from "react";

function CreateArea({setNotes}) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote = (event) => {
    event.preventDefault();
    if (!note.title || !note.content) return;
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
    setNote({
      title: "",
      content: ""
    });
  }

  // useEffect(() => {
  //   console.log(note);
  // }, [note]);

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" placeholder="Title" onChange={handleChange} value={note.title} />
        <textarea name="content" placeholder="Take a note..." onChange={handleChange} rows="3" value={note.content} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
