export default function Skills() {
    return (
      <div className="w-auto mt-8 md:mt-16 ml-2 mr-2 md:ml-0">
        <h2 className="font-serif font-bold text-xl md:text-3xl mb-5  text-sky-700">Programming Skills</h2>
  
        <p className="font-serif font-semibold mb-1 text-sky-500">Tech Stack</p>
        
        <div className="flex flex-col gap-10 md:flex-row md:gap-40">
        <div>
        <p className="font-bold text-orange-500">Frontend:</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
          </ul>
          <p className="font-bold text-orange-500 mt-4">Frameworks:</p>
          <ul className="list-disc pl-6 text-gray-300">
          <li>reactjs</li>
          <li>nextjs</li>
          <li>tailwindcss</li>
          </ul>
      

        </div>

        <div>
        <p className="font-bold text-orange-500">Backend:</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>nodejs</li>
          <li>expressjs</li>
        </ul>
        </div>

        <div>
        <p className="font-bold text-orange-500">DB:</p>
        <ul className="list-disc pl-6 text-gray-300">
          <li>mongoDB</li>
          <li>postgre</li>
        </ul>
        </div>

        </div>
        
        
        


      </div>
    );
  }
  