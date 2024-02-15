import { useState } from "react";

export default function Sidebar(props) {
  const [showHome, setShowHome] = useState(false);



    const buttonStyles = "px-4 py-4 text-xs md:text-base text-stone-400 hover:text-stone-50 uppercase hover:bg-stone-800";
    
    const homeClick = () =>{
      props.showHome();
    }

    const experienceClick = () => {
      props.showExperience();
    }


    return (
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl h-100">

        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">My Portfolio</h2>

        <div className="flex flex-col">

          <button 
          className={buttonStyles}
          onClick={homeClick}
          >Home</button>
          <button 
          className={buttonStyles}
          onClick={experienceClick}
          >Experience</button>
          <button className={buttonStyles}>Skills</button>
          <button className={buttonStyles}>Project</button>
          <button className={buttonStyles}>Contact</button>
        </div>
      </aside>
    );
  }
  