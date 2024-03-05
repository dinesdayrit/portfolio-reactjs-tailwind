import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { useState } from "react";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showContact, setContact] = useState(false);
 

  const homeClick = () =>{
    setShowHome(true)
    setShowExperience(false)
    setShowSkills(false);
    setShowProjects(false);
    setContact(false);
    
  }

  const experienceClick = () => {
    setShowExperience(true)
    setShowHome(false)
    setShowSkills(false);
    setShowProjects(false);
    setContact(false);
  }
  const skillsClick = () => {
    setShowSkills(true);
    setShowHome(false)
    setShowExperience(false)
    setShowProjects(false);
    setContact(false);
  }

  const projectsClick =() =>{
    setShowProjects(true);
    setShowHome(false)
    setShowExperience(false)
    setShowSkills(false);
    setContact(false);
  }

  const contactClick = () => {
    setContact(true);
    setShowHome(false)
    setShowSkills(false);
    setShowProjects(false);
    setShowExperience(false)

  }

  return (
   <main className="h-screen md:flex gap-8  bg-orange-100 md:gap-20 flex-1">
    
    <Sidebar 
      showHome = {homeClick}
      showExperience = {experienceClick}
      showSkills = {skillsClick}
      showContact = {contactClick}
      showProjects = {projectsClick}
    />
 
   <div className="flex-1 overflow-auto bg-orange-100">
    {showHome && (
      <Home />
    )}

    {showExperience && (
    <Experience/>
    )}

    {showSkills && (
    <Skills />
    )} 

    {showProjects && (
    <Projects />
    )}
    {showContact && (
    <Contact/>
    )}
   </div>

   </main>
  );
}

export default App;
