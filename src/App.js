import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  const homeClick = () =>{
    window.location.href = '/';
  }

  const experienceClick = () => {
    window.location.href = '/Experience';
    
  }
  const skillsClick = () => {
    window.location.href = '/skills';
  }

  const projectsClick =() =>{
    window.location.href = '/projects';
  }

  const contactClick = () => {
    window.location.href = '/contact';
  }

  const Error404 = () => (
    <div className="flex flex-col items-center mt-52  h-auto">
      <h1 className="text-stone-100 font-extrabold text-xl">404 - Not Found</h1>
      <p className="text-red-500 font-extrabold text-l">The page you are looking for does not exist.</p>
    </div>
  );

  return (
    <Router>
   <main className="md:flex gap-0.5 bg-gradient-to-r from-black via-stone-900 to-orange-900">

    <Sidebar 
      showHome = {homeClick}
      showExperience = {experienceClick}
      showSkills = {skillsClick}
      showContact = {contactClick}
      showProjects = {projectsClick}
    />
 
   <div className="flex-1 overflow-auto h-screen">
   <Routes>

   <Route path="/" element={<Navigate to="/home" replace />} />
   <Route path="/home"  element={<Home />} />
   <Route path="/experience" element={<Experience />} />
   <Route path="/skills" element={<Skills />} />
   <Route path="/projects" element={<Projects />} />
   <Route path="/contact" element={<Contact />} />
    {/* Catch-all route for 404 errors */}
   <Route path="*" element={<Error404 />} />

  </Routes>
   </div>

   </main>
   </Router>
  );
}

export default App;
