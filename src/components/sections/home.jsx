import { useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  
  const something = () => {}
  
  useEffect(()=>{
     something();
  },[])
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20 overflow-hidden">
      <RevealOnScroll>
        {/* Added bg-opacity for better readability */}
        <div className="text-center z-10 px-4 flex flex-col items-center gap-10 backdrop-blur-sm bg-opacity-50 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-right px-6 md:px-16 w-full max-w-5xl gap-10">

            {/* Profile Picture */}
            <div className="flex justify-center items-center pb-5 flex-shrink-0">
              <img
                src="./images/akb_removed.png"
                alt="Abhay Biradar"
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md rounded-full rounded- object-cover shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-red-200 bg-clip-text text-transparent">
                Abhay Biradar
              </h1>

              <p className="text-gray text-xl font-semibold">Developer Analyst</p>

              <p className="text-gray text-left text-lg mt-4 leading-relaxed">
                As a Data Developer, I bridge the gap between data insights and software solutions.
                I'm passionate about building data-driven applications that solve real-world problems.
                Let's transform data into action together!
              </p>


            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="#projects"
              className="bg-cyan-500 text-black py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-cyan-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10"
            >
              Contact Me
            </a>

            <a
                href="https://www.instagram.com/fintech__bites__/"
                className="bg-cyan-500 text-black py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                FinTech Page
              </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};