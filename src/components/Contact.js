

export default function Contact() {

    return (
      <div className="flex flex-col justify-center items-center  w-auto h-auto bg-blue-500 p-16 rounded-t-full" id='contact'>
        <h2 className="font-serif font-bold text-3xl mb-5  text-orange-500">Contact me</h2>
  
        <p className="font-serif font-semibold mb-1 text-xl text-gray-100 "><i className="fa-brands fa-facebook-messenger mr-1 animate-pulse"></i>Messenger</p>
        <a href="https://m.me/dines.dayrit" target="_blank" rel="noreferrer" className="text-white">https://m.me/dines.dayrit</a>

        {/* <p className="font-serif font-semibold mb-1 text-gray-100  mt-5"><i className="fa-brands fa-skype mr-1"></i>Skype</p>
        <p className="text-white">live:.cid.3b919473cb99ccda</p> */}

        <p className="font-serif font-semibold mb-1 text-xl  text-gray-100 mt-5 "><i className="fa-regular fa-envelope mr-1 animate-pulse"></i>Email</p>
        <p className="text-white">dayritdines22@gmail.com</p>

        <p className="font-serif font-semibold mb-1 text-xl text-gray-100 mt-5"><i className="fa-solid fa-location-dot mr-1 animate-pulse"></i>Location</p>
        <p className="text-white">Davao City. Phillipines</p>



      </div>
    );
  }
  