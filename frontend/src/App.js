import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PanicButton from "./components/PanicButton/PanicButton";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import TalkToAnExpert from "./Pages/TalkToAnExpert/TalkToAnExpert";

function App() {
  return (
    <Router>
      <Navbar />
      <PanicButton />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/help" element={<TalkToAnExpert />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
