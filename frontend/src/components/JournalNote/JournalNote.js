import React from "react";
import "./JournalNote.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserNotLoggedInAlert from "../UserNotLoggedInAlert/UserNotLoggedInAlert";

const JournalNote = () => {
  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });
  const [showUserNotLoggedInAlert, setShowUserNotLoggedInAlert] =
    React.useState(false);

  const userToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const onSave = (e) => {
    e.preventDefault();
    if (userToken) {
      const requestOptions = {
        method: "post",
        url: `http://localhost:3001/api/journal`,
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
        .then((response) => {
          navigate(`allNotes/${response.data.entry._id}`);
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    } else {
      setShowUserNotLoggedInAlert(true);
    }
  };

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleUserNotLoggedInClick = () => {
    setShowUserNotLoggedInAlert(false);
  };

  const viewAllEntries = () => {
    if (!userToken) {
      setShowUserNotLoggedInAlert(true);
    } else {
      navigate("/journal/allNotes");
    }
  };

  return (
    <form className="journal-note-container" onSubmit={(e) => onSave(e)}>
      <input
        type="text"
        placeholder="Title..."
        name="title"
        value={note.title}
        onChange={handleChange}
        required
      />

      <textarea
        className="note-content"
        name="content"
        value={note.content}
        onChange={handleChange}
        id="content"
        rows="4"
        placeholder="Start Writing Here..."
        required
      ></textarea>
      <button className="note-submit-btn" type="submit">
        Save
      </button>
      <button onClick={viewAllEntries}> View All Entries</button>
      {showUserNotLoggedInAlert && (
        <UserNotLoggedInAlert
          handleUserNotLoggedInClick={handleUserNotLoggedInClick}
        />
      )}
    </form>
  );
};

export default JournalNote;
