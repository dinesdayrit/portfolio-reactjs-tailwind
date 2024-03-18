import logo from '../logo/pngegg.png';
import tailwindLogo from '../logo/tailwind-css-svgrepo-com (1).svg';
import expressLogo from '../logo/express-svgrepo-com.svg';
import mongoDBLogo from '../logo/mongodb-svgrepo-com.svg';
import postgreLogo from '../logo/postgresql-svgrepo-com.svg'
import restAPILogo from '../logo/rest-api-svgrepo-com.svg'

export default function Skills() {
    return (
      <div className="flex flex-col items-center  w-auto h-auto p-16" id='skills'>
        <h2 className="font-serif font-bold text-xl md:text-3xl text-sky-700 flex flex-col md:flex-row gap-4 mb-5 items-center"> Programming Skills  <img src={logo} alt='coding' className='h-16 animate-bounce-once'/></h2>

       
  
        <p className="font-serif font-semibold mb-1 text-sky-500">Tech Stack</p>
        
        <div className="flex flex-col gap-10 md:flex-row md:gap-40">
        <div>
        <p className="font-bold text-orange-500">Frontend:</p>
        <ul className="text-gray-200">
          
          <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1'><i className="fa-brands fa-js "></i>JavaScript</li>
          <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1'><i className="fa-brands fa-react "></i>ReactJS</li>
          <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1'><i className="fa-brands fa-css3 "></i>css modules</li>
          <li className='bg-blue-950 rounded-full mb-1 flex'><img src={tailwindLogo} alt="Tailwind CSS" className="w-4 h-6 mr-1"/>tailwindcss</li>
          </ul>

      
        </div>

        <div>
        <p className="font-bold text-orange-500">Backend:</p>
        <ul className="text-gray-300">
        <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1 flex'><img src={restAPILogo} alt="rest api" className="w-4 h-6 mr-1"/>Rest API</li>
        <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1'><i className="fa-brands fa-node-js "></i>nodejs</li>
        <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1 flex'><img src={expressLogo} alt="express js" className="w-4 h-6 mr-1"/>ExpressJS</li>
        <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1'><i className="fa-brands fa-git-alt "></i>Git</li>
        <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1'><i className="fa-brands fa-github "></i>GitHub</li>
        </ul>
        </div>

        <div>
        <p className="font-bold text-orange-500">DB:</p>
        <ul className="text-gray-300">
        <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1 flex'><img src={mongoDBLogo} alt="express js" className="w-4 h-6 mr-1"/>mongoDB</li>
        <li className='bg-blue-950 rounded-full px-2 py-.5 mb-1 flex'><img src={postgreLogo} alt="express js" className="w-4 h-6 mr-1"/>postgreSQL</li>
        </ul>
        </div>

        </div>
        
        
        


      </div>
    );
  }
  