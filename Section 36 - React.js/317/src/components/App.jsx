import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([{ title: "Note title", content: "Note content"}]);
  return (
    <div>
      <Header />
      <CreateArea setNotes={setNotes}/>
      {
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              setNotes={setNotes}
            />
          )
        })
      }
      <Footer />
    </div>
  );
}

export default App;
