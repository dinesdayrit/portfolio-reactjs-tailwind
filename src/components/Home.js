import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from '../profilepic.jpg';
import logo from '../logo/imgbin_front-end-web-development-web-developer-front-and-back-ends-software-developer-png.png'
import '../App.css';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center  w-auto h-screen bg-gradient-to-r from-blue-900 via-blue-500 to-sky-300" id='home'>

      <div className="flex items-center max-sm:flex-col mt-16 md:mt-0">
  
      <img src={profilePic} alt="self" className=" w-24 h-24 md:w-40 md:h-40 rounded-full mr-4" />

      
      <h2 className=" font-serif text-sm md:text-4xl text-stone-100 lg:text-5xl flex flex-col items-center md:flex-row md:animate-bounce-once ">
        Hello, I'm Dines Dayrit!<img src={logo} className='h-12 md:h-24 ml-2' alt='desktop'/>
      </h2>

      </div>

      <p className="mt-10 md:text-lg ml-3 mr-3 text-white md:w-1/2 text-justify" >
        A passionate Web Developer specializing in React.js and Node.js, I thrive on bringing innovative digital solutions to life. Currently, I am engaged with a startup fintech company here in the Philippines, where I am actively involved in the development of a cutting-edge GIS web application tailored for a Local Government Unit (LGU).
      </p>

        
      <div className="mt-8 flex flex-col md:flex-row items-center">
        <a href="https://www.linkedin.com/in/dines-dayrit-067103284/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 md:mr-4">
          <FaLinkedin className="inline-block mr-2" />
          LinkedIn
        </a>
        <a href="https://github.com/dinesdayrit" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 md:mr-4">
          <FaGithub className="inline-block mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
}
