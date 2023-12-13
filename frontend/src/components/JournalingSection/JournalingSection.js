import React from "react";
import { useNavigate } from "react-router-dom";
import "./JournalingSection.css";
import journalingImage from "../../assets/images/well_being.png";

function JournalingSection() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/journal");
  };

  return (
    <div className="journaling-section">
      <div className="journaling-text">
        <p>
          "Journaling is the journey of the self, through the self, to the self.
          It's a canvas where thoughts become visible, making the abstract
          tangible."
        </p>
        <button onClick={handleNavigate}>Explore Journaling</button>
      </div>
      <div className="journaling-image">
        <img src={journalingImage} alt="Journaling" />
      </div>
    </div>
  );
}

export default JournalingSection;
