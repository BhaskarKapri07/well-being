import React from "react";
import "./HomePage.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import JournalingSection from "../../components/JournalingSection/JournalingSection";
import MeditationSection from "../../components/MeditationSection/MeditationSection"
import TherapySection from "../../components/TherapySection/TherapySection"



function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <CategoriesSection />
      <JournalingSection />
      <MeditationSection />
      <TherapySection />
    </div>
  );
}

export default HomePage;
