import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gishomepic from '../projectpictures/home.png';
import sampleplotting1 from '../projectpictures/sampleplotting1.png';
import sampleplotting2 from '../projectpictures/sampleplotting2.png';



export default function Projects() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


       
    
    return (
      <div className="w-[70rem] mt-16">
        <h2 className="font-serif font-bold text-3xl mb-5 text-sky-700">My Projects</h2>
        <div>
            <div>
            <ul className="list-disc pl-6">
                <li className='mb-10'>
                <h3 className="uppercase font-bold text-orange-500">Tax Mapping (GIS Web Application)</h3>
                <p className="mb-10">I am currently working on a GIS Web Application for an LGU. 
                This application helps users locate the exact location of land properties and can also plot parcels using their land titles' technical descriptions, as well as assign Property Index Numbers (PINs).</p>
               
               <Slider {...settings}>
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

            </ul>
            </div>
        </div>
      </div>
    );
}
