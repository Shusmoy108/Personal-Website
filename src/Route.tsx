import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your page components
import HomePage from "./pages/HomePage";
import PublicationPage from "./pages/PublicationPage";
import ConnectPage from './pages/ConnectPage';
import ResearchPage from './pages/ResearchPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectPage from './pages/ProjectPage';
import SkillPage from './pages/SkillPage';
// import ContactPage from "./pages/ContactPage";
// import NotFoundPage from "./pages/NotFoundPage";

// Define routes
const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Root/Home route */}
        <Route path="/" element={<HomePage />} />

        {/* About page */}
        <Route path="/publication" element={<PublicationPage />} />
        <Route path="/connect" element={<ConnectPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skill" element={<SkillPage/>} />

        {/* Contact page */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}

        {/* Catch-all route for 404 errors */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
