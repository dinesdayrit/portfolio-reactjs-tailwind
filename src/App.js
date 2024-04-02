import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './App.css'


function App() {



  return (

   <main className="flex flex-col bg-gray-200">
  
   <Navbar />
   <Home/>
   <About />
   <Experience />
   <Projects />
   <Skills />
   <Contact />
   <Footer />




   </main>

  );
}

export default App;
