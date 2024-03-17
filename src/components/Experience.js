import logo from '../logo/imgbin_developer-icon-ui-icon-coding-icon-png.png';

export default function Experience() {
    return (
      <div className="flex flex-col justify-center items-center h-auto  w-auto p-16 bg-gray-100" id='experience'>
       <div>
        <h2 className="font-serif font-bold text-xl md:text-3xl mb-5  text-sky-700 flex flex-col md:flex-row gap-4 items-center">Programming Job Experience<img src={logo} alt='coding' className='h-16 animate-bounce-once'/></h2>
       
        <p className="font-serif font-semibold mb-1 text-black">(Aug 2023 - Present) 8 Nexity Technology <br /><span className="text-sky-500">Web Developer(GIS Web Application for LGU)</span></p>
        <p className="font-bold text-orange-500 ">Tech used:</p>
        <ul className="list-disc pl-6 text-black">
          <li>ReactJS for Frontend</li>
          <li>ExpressJS/NodeJS for Backend</li>
          <li>postgre for db</li>
          <li>Oracle Cloud Instance (using PUTTY VM)</li>
       

        </ul>

        </div>
        <div>

        <h2 className="font-serif font-bold text-xl md:text-3xl mb-5  text-sky-700 mt-20">Non-Programming Job Experience</h2>

        <p className="font-serif font-semibold mb-4 text-gray-900">*(Sept 2020 - Aug 2023) Novally <br />(<span className="text-sky-500">Lead Generation Quality Assurance Specialist</span>)</p>
        <p className="font-serif font-semibold mb-4 text-gray-900">*(Aug 2017 - Sept 2020) Alps Maintaineering Services <br />(<span className="text-sky-500">Asst. Branch Manager</span>)</p>
        <p className="font-serif font-semibold mb-4 text-gray-900">*(Apr 2014 - Apr 2017) Sixeleven Global Services <br />(<span className="text-sky-500">Senior Technical Support</span>)</p>
        </div>
        


      </div>
    );
  }
  