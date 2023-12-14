import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./EveryEntry.css";
import { useNavigate } from "react-router-dom";

const EveryEntry = (props) => {
  const userToken = localStorage.getItem("token");
  const [allNotes, setAllNotes] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [userToken]);

  useEffect(() => {
    const requestOptions = {
      method: "get",
      url: `http://localhost:3001/api/journal`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios(requestOptions)
      .then((response) => setAllNotes(response.data))
      .catch((error) => console.error(error));
  }, []);

  const notesElements = allNotes.map((note, index) => {
    return (
      <div
        className="single-note-container"
        key={index}
        onClick={() => navigate(`${note._id}`)}
      >
        <h1 className="note-title">{note.title}</h1>
        <p className="note-content">{note.content}</p>
      </div>
    );
  });

  return (
    <div>
      <div className="all-notes-container">{notesElements}</div>
    </div>
  );
};

export default EveryEntry;
