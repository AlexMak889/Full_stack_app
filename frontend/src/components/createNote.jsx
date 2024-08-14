import { useState } from "react";
import api from "../api";

function CreateNote({ getNotes }) {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const createNote = (e) => {
    e.preventDefault();
    api
      .post("/api/notes/", { content, title })
      .then((res) => {
        if (res.status === 201) alert("Note created!");
        else alert("Failed to create note.");
        getNotes();
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="bottom-0 left-0 border-white bg-yellow-200 w-100 h-100 ml-40">
      <h2>Create a Note</h2>
      <div className="content ">
        <form onSubmit={createNote} className="">
          <label htmlFor="title">Title:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <br />
          <label htmlFor="content">Content:</label>
          <br />
          <textarea
            name="content"
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <br />
          <input
            type="submit"
            value="Submit"
            className="border-black border full rounded-lg ml-1 text-gray-800 "
          />
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
