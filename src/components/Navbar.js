import { useEffect, useState } from "react";
import logo from '../logo/icons8-code-64.png';
import {Link} from 'react-scroll';
import '../App.css';

export default function Navbar() {
    const menuStyles = "px-4 py-4 text-xs md:text-base text-sky-400 text-white  uppercase text-left hover:underline-yellow-200 hover:border-b-2 hover:border-yellow-200";
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        // Check if the user has scrolled beyond a certain threshold
        if (window.scrollY > 100) { 
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  
   
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    

    return (
      // <nav className={`items-center bg-transparent md:flex fixed top-0 w-screen z-50 ${navBarBg} !important ${isMenuOpen ? 'bg-blue-700' : ''}`}>
      <nav id="navbar" className="nav">
        <div className="flex justify-between p-3 md:flex-row">
        
        <h2 className="font-extrabold uppercase md:text-xl flex flex-row md:ml-32"> <img src={logo} className="h-8 mr-2 animate-bounce-once" alt="experimental-code-pieces" /> <span className="gradient-text">My Portfolio</span> </h2>
        
        <button 
         onClick={toggleMenu} 
         data-collapse-toggle="navbar-default" 
         type="button" 
         className="flex flex-col items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
         aria-controls="navbar-default" 
         aria-expanded={isMenuOpen ? "true" : "false"}
         >

        <span className="sr-only">Open main menu</span>

        <svg 
         className="w-5 h-5" 
         aria-hidden="true" 
         xmlns="http://www.w3.org/2000/svg" 
         fill="none" 
         viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </button>

        
        </div>
        <div className={`md:p-8 flex flex-col md:block w-1.5 md:w-auto md:ml-auto mr-16 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
       
          <Link
          className={menuStyles}
          activeClass="activeLink" 
          to="home" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          >Home</Link>

          <Link
          className={menuStyles}
          activeClass="activeLink" 
          to="experience" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          >Experience</Link>

          <Link 
          className={menuStyles}
          activeClass="activeLink" 
          to="projects" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          >Projects</Link>

          <Link 
          className={menuStyles}
          activeClass="activeLink" 
          to="skills" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          >Skills</Link>

          <Link
          className={menuStyles}
          activeClass="activeLink" 
          to="contact" 
          spy={true} 
          smooth={true} 
          offset={-100} 
          duration={500} 
          >Contact</Link>
        </div>
      </nav>
      
    );
  }
  