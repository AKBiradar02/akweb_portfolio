import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20 overflow-hidden">
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col items-center gap-15">

          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-16 gap-12 w-full max-w-5xl gap-30">
            {/* Profile Picture */}
            <div className="flex justify-center items-center flex-shrink-0">
              <img 
                src="./images/profile.jpg" 
                alt="Abhay Biradar" 
                className="w-24 h-24 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Abhay Biradar
              </h1>

              <p className="text-gray-300 text-xl font-semibold">Developer Analyst</p>

              <p className="text-gray-400 text-justify text-lg mt-4 leading-relaxed">
                As a Data Developer, I bridge the gap between data insights and software solutions.
                I'm passionate about building data-driven applications that solve real-world problems.
                Let's transform data into action together!
              </p>

              <p className="text-gray-400 text-justify text-lg mt-7 leading-relaxed">
                Let's dive into my Projects →
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-6 mt-6 mr-30">
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
