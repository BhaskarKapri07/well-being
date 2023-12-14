import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./EveryEntry.css";
import { useNavigate } from "react-router-dom";

const EveryEntry = (props) => {
  const userToken = localStorage.getItem("token");
  const [allNotes, setAllNotes] = React.useState([]);
  const navigate = useNavigate();

   // Ensure user is logged in before rendering
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [userToken]);

    // Fetch all notes data on component mount
  useEffect(() => {
    setInterval(()=>{

    },"500")
    const requestOptions = {
      method: "get",
      url: `https://well-being.onrender.com/api/journal`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    axios(requestOptions)
      .then((response) => setAllNotes(response.data))
      .catch((error) => console.error(error));
  }, []);

    // Generate individual note elements for each item in allNotes array

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
