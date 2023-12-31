import React from "react";
import { useParams } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";
import meditationData from "../../assets/data/meditationData.json";
import "./MeditationDetailPage.css";

// Import meditation images
import MindfulMeditationImage from "../../assets/images/mindfulMeditation.avif";
import SpiritualMeditationImage from "../../assets/images/SpiritualMeditation.jpg";
import FocusedMeditationImage from "../../assets/images/focusedMeditation.jpg";
import MovementMeditationImage from "../../assets/images/movementMeditation.jpg";
import MantraMediationImage from "../../assets/images/mantraMeditation.jpg";

const MeditationDetailPage = () => {
   // Scroll to top on page load
  useScrollToTop();

   // Get the meditation title from URL params
  const { meditationTitle } = useParams();

  // Find the corresponding meditation object from data
  const meditation = meditationData.find(
    (m) =>
      m.name.toLowerCase() === decodeURIComponent(meditationTitle).toLowerCase()
  );


  // Function to choose the appropriate image based on meditation name
  const getImage = () => {
    switch (meditation.name) {
      case "Mindfulness Meditation":
        return MindfulMeditationImage;
      case "Spiritual Meditation":
        return SpiritualMeditationImage;
      case "Focused Meditation":
        return FocusedMeditationImage;
      case "Movement Meditation":
        return MovementMeditationImage;
      case "Mantra Meditation":
        return MantraMediationImage;
      default:
        return MindfulMeditationImage;
    }
  };

  // Handle case where meditation is not found
  if (!meditation) {
    return <div>Meditation not found</div>;
  }

  return (
    <div className="meditation-detail">
      <h1>{meditation.name}</h1>
      <div className="meditation-content">
        <img
          src={getImage()}
          alt={meditation.name}
          className="meditation-image"
        />
        <p className="meditation-description">{meditation.description}</p>
      </div>
      <div className="meditation-resources">
        {meditation.resources.map((videoUrl, index) => (
          <iframe
            key={index}
            src={videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`video-${index}`}
            className="meditation-video"
          ></iframe>
        ))}
      </div>
    </div>
  );
};

export default MeditationDetailPage;
