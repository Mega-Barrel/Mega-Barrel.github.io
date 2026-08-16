import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";

// Import ONE component for all project details
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

          {/* The colon tells React that 'projectId' is a dynamic variable */}
          <Route path="projects/:projectId" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}