import React from "react";
import "./HomePage.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <CategoriesSection />
    </div>
  );
}

export default HomePage;
