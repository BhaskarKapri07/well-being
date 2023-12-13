import React from "react";
import "./HomePage.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import JournalingSection from "../../components/JournalingSection/JournalingSection";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <CategoriesSection />
      <JournalingSection />

    </div>
  );
}

export default HomePage;
