import React from "react";
import "./JournalPage.css";
import JournalNote from "../../components/JournalNote/JournalNote";
import journalArt from "../../assets/images/journalv2.jpg";

const JournalPage = () => {
  const journalQuotes = [
    "Take a moment to reflect on your day. What are you grateful for? What challenges did you face?",
    "Even a short note is better than no note at all. Give yourself the gift of reflection.",
    "Today is a blank canvas. Write something to paint it with your thoughts and feelings.",
    "Write down something that made you smile today. Capture the little joys of life.",
    "Journaling is a powerful tool for self-discovery. Start writing to learn more about yourself.",
    "Don't let today pass without saying hello to yourself. Write your first note.",
  ];

  const quote = React.useState(journalQuotes[Math.floor(Math.random() * 6)]);
  const [showNotesEditor, setShowNotesEditor] = React.useState(false);

  return (
    <div className="journal-container">
      {!showNotesEditor ? (
        <>
          <div className="journal-art-quote-container">
            <img className="journal-art" src={journalArt} alt="journal-art" />
            <p className="journal-quote">{quote}</p>
            <button
              className="create-icon-btn"
              onClick={() => setShowNotesEditor(true)}
            >
              Add a Note
            </button>
          </div>
        </>
      ) : (
        <JournalNote />
      )}
    </div>
  );
};

export default JournalPage;
