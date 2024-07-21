import { useState } from "react";
import projects from "../../swprojects.json";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const SwProjects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const navigate = useNavigate();

  const navigateToDetails = (slug: string) => {
    navigate(`/projects/${slug}`);
  };

  return (
    <section className="bg-[#FFC700] dark:bg-neutral-900 py-20 lg:py-48 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4 bg-[#FFC700] p-6 rounded-lg max-h-screen overflow-y-auto">
          <h2 className="mb-10 text-4xl font-normal tracking-normal xl:text-5xl">
            SW Projects
          </h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li
                key={index}
                className={`cursor-pointer px-6 py-4 rounded-lg transition ${
                  selectedProject === project
                    ? "bg-yellow-300 bg-opacity-50 text-black font-semibold"
                    : "text-gray-700 dark:text-gray-400 opacity-70 hover:bg-yellow-300 hover:text-black hover:opacity-100"
                }`}
                onClick={() => setSelectedProject(project)}
              >
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-8">
          <div className="mb-10">
            <h3 className="text-3xl font-normal mb-4">{selectedProject.title}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-48 mb-4"
            />
            <p>{selectedProject.description}</p>
            <button
              className="mt-6 px-4 py-2 bg-yellow-300 rounded-lg font-semibold"
              onClick={() => navigateToDetails(selectedProject.slug)}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwProjects;
