import React from "react";
import "./MeditationSection.css";
import { Link } from "react-router-dom";

import meditationImage from "../../assets/images/meditation_illustration.jpg";
import MindfulMeditationImage from "../../assets/images/mindfulMeditation.avif";
import SpiritualMeditationImage from "../../assets/images/SpiritualMeditation.jpg";
import FocusedMeditationImage from "../../assets/images/focusedMeditation.jpg";
import MovementMeditationImage from "../../assets/images/movementMeditation.jpg";
import MantraMediationImage from "../../assets/images/mantraMeditation.jpg";

const MeditationSection = () => {
  const meditationQuote =
    "Meditation is not a way of making your mind quiet. It's a way of entering into the quiet that's already there.";

  const meditations = [
    {
      title: "Mindfulness Meditation",
      description:
        "Focus on being intensely aware of what you’re sensing and feeling.",
      image: MindfulMeditationImage,
    },
    {
      title: "Spiritual Meditation",
      description:
        "Similar to prayer, this involves reflection on the silence around you.",
      image: SpiritualMeditationImage,
    },
    {
      title: "Focused Meditation",
      description:
        "Involves concentration using any of the five senses. For example, focusing on something internal, like your breath, or bringing in external influences to help focus your attention.",
      image: FocusedMeditationImage,
    },
    {
      title: "Movement Meditation",
      description:
        "This practice may include walking through the woods, gardening, qigong, and other gentle forms of motion.",
      image: MovementMeditationImage,
    },
    {
      title: "Mantra Meditation",
      description:
        "Common in many teachings, including Hindu and Buddhist traditions. This type of meditation uses a repetitive sound to clear the mind. It can be a word, phrase, or sound, such as the popular “Om.”",
      image: MantraMediationImage,
    },
  ];

  return (
    <div className="meditation-container">
      <div className="main-meditation-area">
        <img
          src={meditationImage}
          alt="Meditation"
          className="main-meditation-image"
        />
        <blockquote className="meditation-quote">{meditationQuote}</blockquote>
      </div>
      <div className="meditation-cards">
        {meditations.map((meditation, index) => (
          <Link
            to={`/${encodeURIComponent(meditation.title)}`}
            key={index}
            className="meditation-card"
          >
            <img
              src={meditation.image}
              alt={meditation.title}
              className="card-image"
            />
            <div className="card-content">
              <h3>{meditation.title}</h3>
              <p>{meditation.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MeditationSection;
