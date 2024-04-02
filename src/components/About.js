
export default function About () {
    return(
        <section className="flex flex-col justify-center items-center bg-gray-200" id="about">
            <h2 className="font-serif font-bold text-xl md:text-3xl mb-5  text-sky-700 mt-16">About me</h2>
            <img src='./line.svg' width={180}  alt="line" className="" />
            <div className='flex flex-col items-center md:flex-row gap-8 justify-center'>
            <img src='./profilepic.svg' width={250}  alt="profile" className="bg-sky-800 rounded-s-full rounded-tr-xl mt-12" />
            <p className='md:mt-16 md:w-1/4 font-mono text-xl'>"Hey, I'm Dines Dayrit, a dedicated web developer with a specialization in React.js. I'm all about crafting dynamic and interactive user interfaces that breathe life into web applications."</p>
            </div>
            
        </section>
    )
}