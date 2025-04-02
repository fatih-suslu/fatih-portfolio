import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";
import data from "../data/db.json";

export default function Skills() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const skills = data.skills[language] || data.skills["en"]; // Varsayılan dil İngilizce

  return (
    <section
      id="skills"
      className={`py-16 px-8 md:px-16 lg:px-32 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Başlık */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
        {language === "en" ? "Skills" : "Yetenekler"}
      </h2>

      {/* Skill Kartları */}
      <article className="flex flex-col md:flex-row justify-between gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-start max-w-sm">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">
              {skill.name}
            </h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-500"}`}>
              {skill.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}
