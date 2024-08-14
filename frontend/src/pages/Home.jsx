import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import SideBar from "../components/SideBar";
import CreateNote from "../components/createNote";
import SettingsMenu from "../components/settingsMenu";
import Draggable from "react-draggable";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNote = () => {
    setIsOpen(!isOpen);
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    api
      .get("/api/notes/")
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => alert(err));
  };

  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Note deleted!");
        else alert("Failed to delete note.");
        getNotes();
      })
      .catch((error) => alert(error));
  };

  return (

    <div className="bg-gray-900 h-full w-full flex">
      
      <SideBar />

      <div className="static top-0 right-0">
        <button
          className="  h-16 w-16 bg-slate-600 rounded-full mr-2 mb-2 justify-center items-center flex hover:bg-slate-700"
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined">settings</span>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 mt-16 mr-2 bg-white rounded-lg shadow-lg p-4">
            <SettingsMenu />
          </div>
        )}
      </div>

      <div className="flex-grow relative">
        <div className="absolute bottom-0 right-0 mb-20">
          {notes.map((note) => (
            <Note note={note} onDelete={deleteNote} key={note.id} />
          ))}
        </div>

        <button
          className="absolute bottom-0 right-0 h-16 w-16 bg-slate-600 rounded-full mr-2 mb-2 justify-center items-center flex hover:bg-slate-700"
          onClick={toggleNote}
        >
          <span className="material-symbols-outlined">edit</span>
        </button>
        <div className="absolute">
          {isOpen && <CreateNote getNotes={getNotes} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
