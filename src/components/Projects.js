import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gishomepic from '../projectpictures/home.png';
import sampleplotting1 from '../projectpictures/sampleplotting1.png';
import sampleplotting2 from '../projectpictures/sampleplotting2.png';
import drumkitpic from '../projectpictures/drumkit.png';



export default function Projects() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


       
    
    return (
      <div className="w-[10rem] mt-16 md:w-[70rem]">
        <h2 className="font-serif font-bold text-3xl mb-5 text-sky-700">My Projects</h2>
        <div>
            <div>
            <ul className="list-disc pl-6">
                <li className='mb-10'>
                <h3 className="uppercase font-bold text-orange-500">Tax Mapping (GIS Web Application)</h3>
                <p className="mb-4">I am currently working on a GIS Web Application for an LGU. 
                This application helps users locate the exact location of land properties and can also plot parcels using their land titles' technical descriptions, as well as assign Property Index Numbers (PINs). I use ReactJS for FE , ExpressJS for BE and PostGre for DB.</p>
               
               <Slider {...settings} className="w-[10rem] md:w-[60rem]">
                <div>
                <img src={gishomepic} alt="Gis menupage" />
                </div>

                <div>
                <img  src={sampleplotting1} alt="Sample Plotting 1" />
                </div>

                <div>
                <img src={sampleplotting2} alt="Sample Plotting 2" />
                </div>


                </Slider>
                </li> 

                <li className='mb-10'>
                <h3 className="uppercase font-bold text-orange-500">My Portfolio</h3>
                <p>This Portfolio is written using "ReactJS" and "Tailwind".</p>
                <p>
                Source code Click <a href='https://github.com/dinesdayrit/portfolio-reactjs-tailwind' className='text-blue-500 hover:text-blue-800'>Here</a>
                </p>
                </li> 

                <li className='mb-10'>
                <h3 className="uppercase font-bold text-orange-500">Drum Kit</h3>
                <p>A simple interactive drum kit project developed using JavaScript.A simple interactive drum kit project developed using JavaScript. This small application was part of a Udemy course that i took.</p>
                <p>
                Source code Click <a href='https://github.com/dinesdayrit/drumkit' className='text-blue-500 hover:text-blue-800'>Here</a>
                </p>
                <p>
                Deployed on vercel <a href='https://drumkit-ten-delta.vercel.app/' className='text-blue-500 hover:text-blue-800'>Click Here</a>
                </p>
                <img src={drumkitpic} className="w-[10rem] md:w-[60rem] mt-4"/>

                </li> 

            </ul>
            </div>
        </div>
      </div>
    );
}