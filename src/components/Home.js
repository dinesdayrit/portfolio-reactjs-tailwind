import { FaLinkedin, FaGithub } from 'react-icons/fa';
import homeBg from '../logo/rear-view-programmer-working-all-night-long.jpg';




export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-cover" style={{ backgroundImage: `url(${homeBg})`, width: 'auto' }} id='home'>
    

    <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: orange; }
        }

        .typing-animation .typed-text {
          display: inline-block;
          overflow: hidden;
          border-right: 0.15em solid orange; /* Change the color as needed */
          white-space: nowrap;
          margin: 0 auto;
          animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
        }
      `}</style>

      <div className="flex items-start flex-col mt-16 md:mt-0 md:w-auto lg:w-[75rem] lg:h-1/2">
        <h2 className="font-serif font-bold text-4xl md:text-6xl text-stone-100 lg:text-7xl flex flex-col items-center md:flex-row">
          Hello, <br />I'm Dines!
        </h2>

        <p className="md:text-lg ml-3 mr-3 text-white">
          A Web Developer{' '}
          <span className="text-orange-500 font-bold inline-flex typing-animation">
            <span className="typed-text">React.js | Node.js</span>
          </span>
        </p>


        <div className="mt-8 flex flex-row max-sm:gap-2 items-center">
          <a href="https://www.linkedin.com/in/dines-dayrit-067103284/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 md:mr-4">
            <FaLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>
          <a href="https://github.com/dinesdayrit" target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mb-4 md:mb-0 md:mr-4">
            <FaGithub className="inline-block mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
