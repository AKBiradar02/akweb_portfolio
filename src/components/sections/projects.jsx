import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = `${import.meta.env.VITE_API_URL || "/api"}/projects`; // ✅ Use Vercel or local

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}`) // ✅ Correct API path
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-15"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 backdrop-blur-sm">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-red-200 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="mb-6 flex justify-end">
            <button
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded shadow transition"
              onClick={() => navigate("/admin")}
            >
              Add New Project
            </button>
          </div>
          {loading ? (
            <div className="text-center text-lg">Loading projects...</div>
          ) : error ? (
            <div className="text-center text-red-400">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="p-6 rounded-xl border border-white/30 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-cyan-50 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-150 hover:text-red-300 transition-colors my-4"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </RevealOnScroll>
    </section>
  );
};
