import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative "
      
    >
     
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col items-center">
          {/* Profile Picture */}
          <img src="/profile.jpg" alt="Abhay Biradar" 
               className="w-20 h-20 md:w-70 md:h-50 rounded-full border-3 border-blue-500 shadow-lg mb-7"
          />

          {/* Name */}
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Abhay Biradar
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-2 max-w-lg mx-auto">
            Data Developer
          </p>

          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            As a Data Dev, I bridge the gap between data insights and software solutions.
            I'm passionate about building data-driven applications that solve real-world problems.
            Let's transform data into action together!
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
