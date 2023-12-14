import React from "react";
import "./SingleNote.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SingleNote = ({ match }) => {
  const { noteId } = useParams();
  const userToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  React.useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [userToken]);

  React.useEffect(() => {
    const requestOptions = {
      method: "get",
      url: `https://well-being.onrender.com/api/journal/${noteId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios(requestOptions)
      .then((response) => setNote(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const updateNote = () => {
    const requestOptions = {
      method: "put",
      url: `https://well-being.onrender.com/api/journal/${noteId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      data: {
        title: note.title,
        content: note.content,
      },
    };

    axios(requestOptions)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
    navigate("/journal/allNotes");
  };

  const deleteNote = () => {
    const requestOptions = {
      method: "delete",
      url: `https://well-being.onrender.com/api/journal/${noteId}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios(requestOptions)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
    navigate("/journal/allNotes");
  };

  return (
    <div>
      <form className="journal-note-container" onSubmit={updateNote}>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={note.title}
          onChange={handleChange}
          required
          autoComplete="current-title"
        />
        <textarea
          className="note-content"
          name="content"
          value={note.content}
          onChange={handleChange}
          id="content"
          rows="4"
          placeholder="Three things you are grateful for..."
          required
          autoComplete="current-content"
        ></textarea>
        <button className="note-submit-btn" type="submit">
          Modify
        </button>
        <button className="note-delete" onClick={deleteNote}>
          {" "}
          Delete
        </button>
      </form>
    </div>
  );
};

export default SingleNote;
