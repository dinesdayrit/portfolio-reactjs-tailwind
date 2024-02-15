import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Experience from "./components/Experience";

import { useState } from "react";

function App() {
  const [showHome, setShowHome] = useState(true);
  const [showExperience, setShowExperience] = useState(false);

  const homeClick = () =>{
    setShowHome(true)
    setShowExperience(false)
  }

  const experienceClick = () => {
    setShowExperience(true)
    setShowHome(false)
  }

  return (
    <main className="h-screen flex gap-20">
    
    <Sidebar 
      showHome = {homeClick}
      showExperience = {experienceClick}
    />
 
    {showHome && (
      <Home />
    )}

    {showExperience && (
    <Experience/>
    )}

    </main>
  );
}

export default App;
