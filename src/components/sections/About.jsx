import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "HTML5",
  ];

  const backendSkills = ["Flask", "Python", "AWS", "RestAPI", "GraphQL", "SQLite"];
  const dataSkills = ["SQL", "Python", "Numpy", "Pandas", "PowerBI", "Excel", "Analysis", "EDA", "ETL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-red-200 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-5 border-white/40 border backdrop-blur-sm hover:-translate-y-1 transition-all">
            <p className="text-gray-100 mb-6 text-center">
              I am a passionate and detail-oriented developer with a strong analytical mindset and a drive for continuous learning. 
              I thrive on solving complex problems and enjoy bridging the gap between data and technology. 
              With a keen eye for efficiency and innovation, I approach challenges with a structured yet creative perspective,
              always looking for ways to improve and optimize. My ability to adapt to new technologies, 
              combined with my dedication to quality and precision, makes me a valuable asset in any technical environment.
               Beyond coding, I value collaboration and enjoy sharing knowledge, always seeking to grow both personally and professionally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data Analytics</h3>
                <div className="flex flex-wrap gap-2">
                  {dataSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 backdrop-blur-sm gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-cyan-50 space-y-2">
                <li>
                  <strong> B.Tech in Electrical and Computer Engineering </strong> - MIT World Peace University,Pune
                  (2021-2025)
                </li>
                <li>
                  Relevant Coursework: Data Science, Web Development, Database Management System, Electrical Machines,
                  AIML
                </li>

                <li>
                  <strong>HSC 12th</strong> - Yeshwant Junior College, Ahmedpur
                  (2020 - 2021)
                </li>

                <li>
                  Relevant CourseWork: Physics, Chemistry, Maths, Electronics.
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-cyan-50">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Developer Analyst ( Jan2025 - Present){" "}
                  </h4>
                  <p>
                    Developing Optical Character Re-cognization by using machine learning model.
                    Image processing with text display.
                    Flask, RestAPI
                    ReactJs, Front-End
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Internshala (Dec-2021  - Jan-2022){" "}
                  </h4>
                  <p>
                    Developed marketing skills, communication skills and learned how to chat with the firms,
                    how to lead the group, how to work as a leader, how to gain reach.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};