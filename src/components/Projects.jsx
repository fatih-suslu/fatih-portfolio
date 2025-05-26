import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";
import data from "../data/db.json";

import projectImg1 from "../assets/projects-img-1.png";
import ElecTrack from "../assets/ElecTrack.png";
import projectImg3 from "../assets/projects-img-3.png";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const projects = data.projects[language] || data.projects["en"];

  const projectImages = {
    projectImg1: projectImg1,
    ElecTrack: ElecTrack,
    projectImg3: projectImg3,
  };

  return (
    <section
      id="projects"
      className={`px-8 md:px-16 lg:px-32 py-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
        {language === "en" ? "Projects" : "Projeler"}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center md:justify-between w-full">
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 w-full sm:w-[320px] mb-8 md:mb-0"
          >
            {/* Görseli ekle */}
            <img
              src={projectImages[project.img]}
              alt={project.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600">
              {project.name}
            </h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              {project.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm text-indigo-600 font-medium border border-indigo-600 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold underline hover:text-indigo-800"
                >
                  {link.site}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
