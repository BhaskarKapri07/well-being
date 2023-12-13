import React from "react";
import "./HeroSection.css";
import landscapeImage from "../../assets/images/journalv4.jpg";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-quote">
          <p>
            "The mind is like water. When it's turbulent, it's difficult to see.
            When it's calm, everything becomes clear."
          </p>
          <span>— Prasad Mahes</span>
        </div>
        <img
          src={landscapeImage}
          alt="Serene Landscape"
          className="hero-image"
        />
      </div>
    </div>
  );
}

export default HeroSection;
