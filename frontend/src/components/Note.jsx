import React from "react";
import Draggable from "react-draggable";

function Note({ note, onDelete }) {
  const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
  return (
    <Draggable>
      <div className="bg-yellow-200 border border-solid mb-2 mr-2 font-heading text-xl cursor-move rounded p-4">
        <p className=" mt-3">{note.title}</p>
        <p>{note.content}</p>
        <p>{formattedDate}</p>
        <button
          className=" border-black border full rounded-lg ml-1 bg-blue-950 text-white hover:border-white"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </Draggable>
  );
}

export default Note;
