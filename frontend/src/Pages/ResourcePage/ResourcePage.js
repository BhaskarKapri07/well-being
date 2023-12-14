import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import { useNavigate } from "react-router-dom";
import conditions from "../../assets/data/conditions.json";
import "./ResourcePage.css";
import adhdImage from "../../assets/images/adhd.png";
import anxietyImage from "../../assets/images/anxiety.png";
import depressionImage from "../../assets/images/depression.png";
import addictionImage from "../../assets/images/addiction.png";
import ptsdImage from "../../assets/images/ptsd.png";
import autismImage from "../../assets/images/autism.png";
import schizImage from "../../assets/images/schiz.jpg";
import ocdImage from "../../assets/images/ocd.jpg";
import bipolarImage from "../../assets/images/bipolar.jpg"


function ResourcesPage() {
  const navigate = useNavigate();

  // Define images object for quick access
  const images = {
    "adhd.png": adhdImage,
    "anxiety.png": anxietyImage,
    "depression.png": depressionImage,
    "addiction.png": addictionImage,
    "ptsd.png": ptsdImage,
    "autism.png": autismImage,
    "schizophrenia.png":schizImage,
    "ocd.png":ocdImage,
    "bipolar.png":bipolarImage
  };

   // Function to handle "Read More" button click
  const handleReadMoreClick = (conditionName) => {
     // Navigate to the specific condition page
    navigate(`/condition/${conditionName}`);
  };

    // Scroll to top on page load
  useScrollToTop();

  return (
    <div className="resources-page">
      {conditions.map((condition) => (
        <div key={condition.name} className="condition-card">
          <img src={images[condition.imageName]} alt={condition.name} />{" "}
          {/* Update image handling */}
          <h3>{condition.name}</h3>
          <p>{condition.description}</p>
          <button onClick={() => handleReadMoreClick(condition.name)}>
            Read More
          </button>
        </div>
      ))}
    </div>
  );
}

export default ResourcesPage;
