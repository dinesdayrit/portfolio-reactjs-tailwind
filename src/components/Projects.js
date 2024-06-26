import React, { useState } from 'react';
import gishomepic from '../projectpictures/home.png';
import drumkitpic from '../projectpictures/drumkit.png';
import logo from '../logo/imgbin_web-development-responsive-web-design-web-developer-software-developer-png.png';
import reactQuicPic from '../projectpictures/reactQuiz.png';
import dialPic from '../projectpictures/dial.png'


export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col justify-center md:items-center   w-auto p-16 bg-gradient-to-r from-sky-700 via-sky-800 to-sky-700 rounded-3xl " id='projects'>
      <h2 className="font-serif font-bold text-3xl mb-8 text-white flex flex-col md:flex-row items-center gap-4">
        Sample Projects <img src={logo} alt="coding" className="h-12 md:h-16  animate-bounce-once" />
      </h2>

      <div className="md:w-[64rem] custom-scrollbar overflow-y-auto ">
        <ul className="list-disc pl-6 text-gray-300">
          <li className="mb-10">
            <h3 className="uppercase font-bold text-orange-500 text-sm md:text-xl">Tax Mapping (GIS Web Application)</h3>

            <div className='flex flex-col md:flex-row gap-2 items-center'>
            <img src={gishomepic} alt="Gis menupage" className="mt-2 w-[10rem] md:w-[30rem] outline rounded-xl" />
            <p className={`mb-4 text-sm md:text-lg text-white ${!showAll ? 'h-auto' : ''}`}>
              I am currently working on a GIS Web Application for an LGU. This application helps users locate the exact location of land properties and can also plot parcels using their land
              titles' technical descriptions, as well as assign Property Index Numbers (PINs). I use ReactJS for FE , ExpressJS for BE and PostGre for DB.
              <div className="flex flex-col md:flex-row h-auto w-auto mt-4 items-center">
              <i className="inline-block bg-orange-600 hover:bg-orange-700 text-white  py-1 px-2 rounded-full mb-2 md:mb-0 md:mr-2">ReactJS</i>
              <i className="inline-block bg-gray-800 hover:bg-gray-900 text-white  py-1 px-2  rounded-full mb-2 md:mb-0 md:mr-2">NodeJS</i>
              <i className="inline-block bg-orange-600 hover:bg-orange-700 text-white  py-1 px-2  rounded-full mb-2 md:mb-0 md:mr-2">PostGre</i>
              <i className="inline-block bg-gray-800 hover:bg-gray-900 text-white py-1 px-2 rounded-full mb-2 md:mb-0 md:mr-2">Oracle Cloud (via PUTTY)</i>
            </div>
            </p>
            </div>  

          </li>


          <li className="mb-10">
                <h3 className="uppercase font-bold text-orange-500 text-sm md:text-xl">DiAL Hub Online Store</h3>

                <div className='flex flex-col md:flex-row gap-2 items-center'>
                <img src={dialPic} className=" w-[10rem] md:w-[30rem] mt-4 outline rounded-xl" alt="drumkit-pic" />
                <p className="mb-4 text-sm md:text-lg text-white">A web application for Online Store.
                <div className="flex flex-col md:flex-row items-center mt-4">
                  <i className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-1 px-2 rounded-full mb-2 md:mb-0 md:mr-4">React</i>
                  <i className="inline-block bg-gray-800 hover:bg-gray-900 text-white  py-1 px-2  rounded-full mb-2 md:mb-0 md:mr-4">Vite</i>
                  <i className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-1 px-2 rounded-full mb-2 md:mb-0 md:mr-4">TypeScript</i>
                  <i className="inline-block bg-gray-800 hover:bg-gray-900 text-white  py-1 px-2  rounded-full mb-2 md:mb-0 md:mr-4">Tailwind</i>
                </div>
                </p>
                
                </div>
                <p className="mb-4 text-sm md:text-lg text-gray-100">
                  Source code on GitHub Click <a href="https://github.com/dinesdayrit/DiALHub-Store-React-TS-Tailwind" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-800 underline">Here</a>
                </p>
                <p className="mb-4 text-sm md:text-lg text-white">
                  Live Site <a href="https://dial-hub.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-800 underline">Here</a>
                </p>
              </li>


          
          
 

              {!showAll && (
            <li className="mb-10">
              <button
                onClick={toggleShowAll}
                className="uppercase font-bold text-orange-500 text-sm md:text-xl focus:outline-none hover:text-orange-700"
              >
                >> See More
              </button>
            </li>
          )}

          {showAll && (
            <>

            <li className="mb-10">
                <h3 className="uppercase font-bold text-orange-500 text-sm md:text-xl">Toddler Quiz</h3>

                <div className='flex flex-col md:flex-row gap-2 items-center'>
                <img src={reactQuicPic} className="w-[10rem] md:w-[30rem] mt-4 outline rounded-xl" alt="drumkit-pic" />
                <p className="mb-4 text-sm md:text-lg text-white">A simple quiz app that i built for my 4 years old son.
                <div className="flex flex-col md:flex-row items-center mt-4">
                  <i className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-1 px-2 rounded-full mb-2 md:mb-0 md:mr-4">ReactJS</i>
                  <i className="inline-block bg-gray-800 hover:bg-gray-900 text-white  py-1 px-2  rounded-full mb-2 md:mb-0 md:mr-4">Vite</i>
                </div>
                </p>
                
                </div>
                <p className="mb-4 text-sm md:text-lg text-gray-100">
                  Source code on GitHub Click <a href="https://github.com/dinesdayrit/react-quiz" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-800 underline">Here</a>
                </p>
                <p className="mb-4 text-sm md:text-lg text-white">
                  Live Site <a href="https://react-quiz-dinesdayrit.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-800 underline">Here</a>
                </p>
              </li>

              <li className="mb-10">
                <h3 className="uppercase font-bold text-orange-500 text-sm md:text-xl">Drum Kit</h3>

                <div className='flex flex-col md:flex-row gap-2 items-center'>
                <img src={drumkitpic} className="w-[10rem] md:w-[30rem] mt-4 outline rounded-xl" alt="drumkit-pic" />
                <p className="mb-4 text-sm md:text-lg text-white">A simple interactive drum kit project developed using JavaScript.
                <div className="flex flex-col md:flex-row items-center mt-4">
                  <i className="inline-block bg-orange-600 hover:bg-orange-700 text-white py-1 px-2 rounded-full mb-2 md:mb-0 md:mr-4">HTML</i>
                  <i className="inline-block bg-gray-800 hover:bg-gray-900 text-white  py-1 px-2  rounded-full mb-2 md:mb-0 md:mr-4">css</i>
                  <i className="inline-block bg-orange-600 hover:bg-orange-800 text-white py-1 px-2  rounded-full mb-2 md:mb-0 md:mr-4">JavaScript</i>
                </div>
                </p>
                
                </div>
                <p className="mb-4 text-sm md:text-lg text-gray-100">
                  Source code on GitHub Click <a href="https://github.com/dinesdayrit/drumkit" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-800 underline">Here</a>
                </p>
                <p className="mb-4 text-sm md:text-lg text-white">
                  Live Site <a href="https://drumkit-ten-delta.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-800 underline">Here</a>
                </p>
              </li>



              <li className="mb-10">
                <button
                  onClick={toggleShowAll}
                  className="uppercase font-bold text-orange-500 text-sm md:text-xl focus:outline-none hover:text-orange-700"
                >
                 &lt;&lt; See Less
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
