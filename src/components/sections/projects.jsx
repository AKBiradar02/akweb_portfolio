import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-15"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-red-200 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Text_Analysis</h3>
              <p className="text-cyan-50 mb-4">
                The goal was to perform automated textual analysis on articles retrieved from URLs provided in an input file.
                Each URL was associated with a unique URL ID, and the results needed to be stored in an output file
                with the columns ordered as URL ID, and URL followed by computed metrics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["NTK", "Pandas", "OpenPyXL", "BeautifulSoup4", "Requests", "Textstat"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/AKBiradar02/DATA_SCIENCE/tree/main/Text_Analysis"
                  className="text-red-150 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/30 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">React-Vite Web-Portfolio</h3>
              <p className="text-cyan-50 mb-4">
                Developed a portfolio based on React + vite integration.
                Added EmailJS API for contact and to get Connected with fellow guests!
                Added github projects links with descriptions...
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "Vite", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/AKBiradar02/akweb_portfolio"
                  className="text-red-150 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/30 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">OCR Image Processing Application</h3>
              <p className="text-cyan-50 mb-4">
                ML-powered data driven machine learning trained model with IAM handwritten words.
                Developed a Model for Optical Character Recognization with image processing.

              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "React", "Flask", "RestAPI"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-red-150 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/30 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Stock_Market_Analysis</h3>
              <p className="text-cyan-50 mb-4">
                
                This data set consists of a number of companies’ stock data from 2000-2021 including Adani Ports, Bajaj Finance, Wipro, Infosys, and many more. 
                But for this project, we will be analyzing three Tata stocks - Tata Motors, Tata Steel, and Tata Consultancy Services (TCS)
                
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Jupyter Notebook", "Python", "Pandas", "Numpy", "Matplotlib", "Analytics"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/AKBiradar02/DATA_SCIENCE/tree/main/Stock_Market_Analysis"
                  className="text-cyan-150 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/30 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Netflix_Data_Analysis</h3>
              <p className="text-cyan-50 mb-4">
                Performed the Exploratory Data Analysis for the Netflix dataset.
                Extracted meaningful insights from the dataset.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Pandas", "numpy", "seaborn"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/AKBiradar02/DATA_SCIENCE/tree/main/NETFLIX_DATA_EDA"
                  className="text-cyan-150 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/30 
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Brand-Page</h3>
              <p className="text-cyan-50 mb-4">
              Brand-Page of Nike for the learning of React And usability of Vite.
              This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "TailwindCSS", "Vite", "JavaScript"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/AKBiradar02/brand-page"
                  className="text-cyan-150 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};