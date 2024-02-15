import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

import { useState } from "react";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setContact] = useState(false);

  const homeClick = () =>{
    setShowHome(true)
    setShowExperience(false)
    setContact(false);
  }

  const experienceClick = () => {
    setShowExperience(true)
    setShowHome(false)
    setContact(false);
  }

  const contactClick = () => {
    setContact(true);
    setShowHome(false)
    setShowExperience(false)

  }

  return (
    <main className="h-screen flex gap-20">
    
    <Sidebar 
      showHome = {homeClick}
      showExperience = {experienceClick}
      showContact = {contactClick}
    />
 
    {showHome && (
      <Home />
    )}

    {showExperience && (
    <Experience/>
    )}

    {showContact && (
    <Contact/>
    )}

    </main>
  );
}

export default App;
