import React from "react";
import "./HomePage.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import JournalingSection from "../../components/JournalingSection/JournalingSection";
import MeditationSection from "../../components/MeditationSection/MeditationSection"

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <CategoriesSection />
      <JournalingSection />
      <MeditationSection />

    </div>
  );
}

export default HomePage;
