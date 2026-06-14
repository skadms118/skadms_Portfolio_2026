import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import AboutPage from "./about/AboutPage";
import ExperiencePage from "./experience/ExperiencePage";
import ProjectPage from "./project/ProjectPage";
import SkillPage from "./skill/SkillPage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/skill" element={<SkillPage />} />
      </Route>
    </Routes>
  );
}

export default App;
