import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PanicButton from "./components/PanicButton/PanicButton";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import TalkToAnExpert from "./Pages/TalkToAnExpert/TalkToAnExpert";
import ResourcesPage from "./Pages/ResourcePage/ResourcePage"
import ConditionDetailPage from "./Pages/ConditionDetailPage/ConditionDetailPage";

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
          <Route path="/resources" element={<ResourcesPage />} />
          <Route
            path="/condition/:conditionId"
            element={<ConditionDetailPage />}
          />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
