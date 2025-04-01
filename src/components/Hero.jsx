import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";
import data from "../data/db.json";
import photo from "../assets/photo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const heroData = data.hero[language] || data.hero["en"]; // Varsayılan dil İngilizce

  return (
    <main
      className={`py-16 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Sol */}
      <section className="flex-1 text-left">
        <header>
          <div className="flex items-center justify-start">
            {/* Çizgi */}
            <div
              className={`h-px w-16 md:w-32 ${
                darkMode ? "bg-white" : "bg-indigo-800"
              } mr-3`}
            ></div>
            <h2
              className={`text-xl md:text-2xl font-semibold ${
                darkMode ? "text-gray-300" : "text-indigo-700"
              }`}
            >
              {heroData.name}
            </h2>
          </div>
        </header>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold my-8 whitespace-pre-line">
          {heroData.title}
        </h1>
        <p className="text-base md:text-lg lg:text-2xl mb-8 leading-relaxed whitespace-pre-line">
          {heroData.description}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#hire-me"
            className="bg-indigo-800 text-white text-xl font-semibold w-36 h-14 rounded-lg hover:text-gray-400 flex items-center justify-center"
          >
            {heroData.buttons?.hireMe}
          </a>
          <a
            href={heroData.links?.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 text-xl font-semibold border border-indigo-800 w-36 h-14 rounded-lg hover:text-gray-400 flex items-center justify-center gap-2"
          >
            <FaGithub className="text-3xl" /> {heroData.buttons?.github}
          </a>
          <a
            href={heroData.links?.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 text-xl font-semibold border border-indigo-800 w-36 h-14 rounded-lg hover:text-gray-400 flex items-center justify-center gap-2"
          >
            <FaLinkedin className="text-3xl" /> {heroData.buttons?.linkedin}
          </a>
        </div>
      </section>

      {/* Fotoğraf */}
      <figure className="mt-8 md:mt-0 max-w-xs md:max-w-lg lg:max-w-lg w-full mx-auto">
        <img
          src={photo}
          alt="photo"
          className="rounded-3xl w-full h-auto object-cover"
        />
      </figure>
    </main>
  );
}
