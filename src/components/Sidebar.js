import { useState } from "react";

export default function Sidebar(props) {
    const buttonStyles = "px-4 py-4 text-xs md:text-base text-sky-400 hover:text-stone-50 uppercase text-left hover:underline";
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    
    const homeClick = () =>{
      props.showHome();
    }

    const experienceClick = () => {
      props.showExperience();
    }

    const skillsClick = () => {
      props.showSkills();
    }

    const projectsClick = () => {
      props.showProjects();
    }

    const contactClick = () => {
      props.showContact();
    }

    return (
      <nav className=" bg-stone-900 text-stone-50 dark:bg-gray-900 md:rounded-r-xl">
        <div className="flex justify-between p-4 md:flex-col md:w-72">
        <h2 className="md:mt-4 font-bold uppercase md:text-xl text-stone-200">My Portfolio</h2>
        
        <button 
         onClick={toggleMenu} 
         data-collapse-toggle="navbar-default" 
         type="button" 
         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
         aria-controls="navbar-default" 
         aria-expanded={isMenuOpen ? "true" : "false"}
         >

        <span class="sr-only">Open main menu</span>

        <svg 
         className="w-5 h-5" 
         aria-hidden="true" 
         xmlns="http://www.w3.org/2000/svg" 
         fill="none" 
         viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>

        
        </div>
        <div className={`md:p-8 max-w-1.5 md:block flex flex-col ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
       
          <button 
          className={buttonStyles}
          onClick={homeClick}
          >Home</button>

          <button 
          className={buttonStyles}
          onClick={experienceClick}
          >Experience</button>

          <button 
          className={buttonStyles}
          onClick={skillsClick}
          >Skills</button>

          <button 
          className={buttonStyles}
          onClick={projectsClick}
          >Projects</button>

          <button 
          className={buttonStyles}
          onClick={contactClick}
          >Contact</button>
        </div>
      </nav>
      
    );
  }
  