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

     // Check for user login before saving
    if (userToken) {
      // Create API request options
      const requestOptions = {
        method: "post",
        url: `https://well-being.onrender.com/api/journal`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        data: {
          title: note.title,
          content: note.content,
        },
      };

          // Send API request to save the note
      axios(requestOptions)
        .then((response) => {
             // Navigate to saved note page
          navigate(`allNotes/${response.data.entry._id}`);
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    } else {
          // Display user not logged in alert
      setShowUserNotLoggedInAlert(true);
    }
  };

   // Handle input changes for note title and content
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleUserNotLoggedInClick = () => {
    setShowUserNotLoggedInAlert(false);
  };

    // Handle user clicking "View All Entries" button

  const viewAllEntries = () => {
    if (!userToken) {
      setShowUserNotLoggedInAlert(true);
    } else {
      navigate("/journal/allNotes");
    }
  };

    // Render user not logged in alert if necessary
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
