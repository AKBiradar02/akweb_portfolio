import React, { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import axios from "axios";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("https://akweb-backend.onrender.com/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-15">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-red-200 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  key={project.id}
                  className="glass p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-cyan-50 mb-4">{project.description}</p>

                  {project.tech_stack && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech_stack.split(',').map((tech, index) => (
                        <span
                          key={index}
                          className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm transition hover:bg-cyan-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex justify-between items-center">
                    {project.github_link && (
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-150 hover:text-red-300 transition-colors my-4"
                      >
                        GitHub →
                      </a>
                    )}
                    {project.demo_link && (
                      <a
                        href={project.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-150 hover:text-red-300 transition-colors my-4"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-white text-center col-span-3">No projects found.</p>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
