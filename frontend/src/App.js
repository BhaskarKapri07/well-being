import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PanicButton from "./components/PanicButton/PanicButton";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage";
import TalkToAnExpert from "./Pages/TalkToAnExpert/TalkToAnExpert";
import ResourcesPage from "./Pages/ResourcePage/ResourcePage";
import JournalPage from "./Pages/JournalPage/JournalPage";
import ConditionDetailPage from "./Pages/ConditionDetailPage/ConditionDetailPage";
import MeditationDetailPage from "./Pages/MeditationDetailPage/MeditationDetailPage";
import HelpPage from "./Pages/HelpPage/HelpPage";
import EveryEntry from "./components/EveryEntry/EveryEntry";
import SingleNote from "./components/SingleNote/SingleNote";
import PageNotFound from "./components/PageNotFound/PageNotFound";



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
          <Route path="/therapy" element={<TalkToAnExpert />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/allNotes" element={<EveryEntry />} />
          <Route
            path="/condition/:conditionId"
            element={<ConditionDetailPage />}
          />


          <Route 
            path="/journal/allNotes/:noteId"
            element={<SingleNote/>}
          />
          <Route path="/:meditationTitle" element={<MeditationDetailPage />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
