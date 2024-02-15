import { FaLinkedin, FaGithub } from 'react-icons/fa';
import profilePic from '../profilepic.jpg';

export default function Home() {
  return (
    <div className="w-[80rem] mt-16 ">

     <div className="flex items-center">
  
      <img src={profilePic} alt="Profile Picture" className="w-40 h-40 rounded-full mr-4" />

      <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-sky-700">
        Hello, I'm Dines Dayrit! 🌟
      </h2>

      </div>

      <p className="mt-10 text-lg md:text-xl text-gray-800 ml-4">
        A passionate Web Developer with expertise in React.js and Node.js, I thrive on bringing innovative digital solutions to life. Currently, I am engaged with a leading fintech company here in the Philippines, where I am actively involved in the development of a cutting-edge GIS web application tailored for a Local Government Unit (LGU).
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
