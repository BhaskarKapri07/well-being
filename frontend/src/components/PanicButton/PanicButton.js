import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PanicButton.css";

function PanicButton() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const navigate = useNavigate();

  const messages = [
    "Take a deep breath...",
    "Hold for a moment...",
    "Exhale slowly...",
    "Feel the tension leaving your body...",
    "Acknowledge your thoughts, let them pass...",
    "Focus on the present, you are in this moment...",
    "Visualize a place where you feel calm and safe...",
    "Remember, you are valued and strong...",
    "Breathe in peace, breathe out stress...",
    "You're doing great, one step at a time...",
  ];

  useEffect(() => {
    let timer;
    if (showOverlay && currentMessageIndex < messages.length) {
      timer = setTimeout(() => {
        setCurrentMessageIndex(currentMessageIndex + 1);
      }, 4000); // Each message displays for 4 seconds
    }

    return () => clearTimeout(timer);
  }, [showOverlay, currentMessageIndex, messages.length]);

  useEffect(() => {
    if (currentMessageIndex === messages.length) {
      setShowOverlay(false);
      setCurrentMessageIndex(0);
      setTimeout(() => navigate("/therapy"), 500); // Delaying navigation
    }
  }, [currentMessageIndex, navigate, messages.length]);

  const handlePanicClick = () => {
    setShowOverlay(true);
    setCurrentMessageIndex(0);
  };

  return (
    <>
      <button className="panic-button" onClick={handlePanicClick}>
        Are You Panicking?
      </button>

      {showOverlay && (
        <div className="calming-overlay">
          <p className="calming-message">{messages[currentMessageIndex]}</p>
        </div>
      )}
    </>
  );
}

export default PanicButton;
