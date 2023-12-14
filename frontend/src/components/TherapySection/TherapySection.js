import React from "react";
import therapistImage from "../../assets/images/therapist.jpg";
import { useNavigate } from "react-router-dom";
import "./TherapySection.css";

const TherapySection = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/therapy");
  };

  return (
    <div className="therapy-section">
       {/* Image section */}
      <div className="therapy-image">
        <img src={therapistImage} alt="therapist" />
      </div>

        {/* Text section with quote and button */}
      <div className="therapy-text">
        <p>
          "It takes courage to seek help, but it is a sign of strength, not
          weakness. Talking to a therapist can be a life-changing experience."
        </p>
        <button onClick={handleNavigate}>Explore Therapy</button>
      </div>
    </div>
  );
};

export default TherapySection;
