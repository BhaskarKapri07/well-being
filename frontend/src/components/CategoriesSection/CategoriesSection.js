import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesSection.css";
import conditions from "../../assets/data/conditions";
import adhdImage from "../../assets/images/adhd.png";
import anxietyImage from "../../assets/images/anxiety.png";
import depressionImage from "../../assets/images/depression.png";
import addictionImage from "../../assets/images/addiction.png";

function CategoriesSection() {
  const navigate = useNavigate();

  const displayConditions = conditions.slice(0, 4);
  const images = {
    "adhd.png": adhdImage,
    "anxiety.png": anxietyImage,
    "depression.png": depressionImage,
    "addiction.png": addictionImage,
  };

  const handleNavigate = () => {
    navigate("/resources"); // Adjust the route as needed
  };

  return (
    <div className="categories-section">
      <h2>Mental Health Conditions</h2>
      <div className="categories-list">
        {displayConditions.map((condition) => (
          <div key={condition.name} className="category">
            <img
              src={images[condition.imageName]}
              alt={condition.name}
              className="category-image"
            />
            <h3>{condition.name}</h3>
            <p>{condition.description}</p>
          </div>
        ))}
      </div>
      <button onClick={handleNavigate} className="view-resources-btn">
        View Resources
      </button>
    </div>
  );
}

export default CategoriesSection;
