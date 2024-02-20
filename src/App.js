import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import { useState } from "react";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setContact] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  const homeClick = () =>{
    setShowHome(true)
    setShowExperience(false)
    setShowSkills(false);
    setContact(false);
    
  }

  const experienceClick = () => {
    setShowExperience(true)
    setShowHome(false)
    setShowSkills(false);
    setContact(false);
  }
  const skillsClick = () => {
    setShowSkills(true);
    setShowHome(false)
    setShowExperience(false)
    setContact(false);
  }

  const contactClick = () => {
    setContact(true);
    setShowHome(false)
    setShowSkills(false);
    setShowExperience(false)

  }

  return (
    <main className="h-screen flex gap-20 bg-orange-100">
    
    <Sidebar 
      showHome = {homeClick}
      showExperience = {experienceClick}
      showSkills = {skillsClick}
      showContact = {contactClick}
    />
 
    {showHome && (
      <Home />
    )}

    {showExperience && (
    <Experience/>
    )}

    {showSkills && (
    <Skills />
    )} 

    {showContact && (
    <Contact/>
    )}

    </main>
  );
}

export default App;
