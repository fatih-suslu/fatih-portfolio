import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaHandPointRight } from "react-icons/fa";
import data from "../data/db.json";

export default function Footer() {
  const { darkMode } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const footerData = data.footer[language] || data.footer["en"]; // Varsayılan dil İngilizce

  return (
    <footer
      id="hire-me"
      className={`py-12 md:py-24 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="px-4 md:px-16 lg:px-32">
        {/* Başlık */}
        <div className="text-center md:text-left mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold whitespace-pre-line">
            {footerData.title}
          </h2>
        </div>

        {/* Eposta ve Sosyal */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Eposta */}
          <section className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <FaHandPointRight
                className={`text-xl md:text-2xl ${
                  darkMode ? "text-yellow-300" : "text-yellow-400"
                }`}
              />
              <a
                href={`mailto:${footerData.email}`}
                className={`text-lg md:text-2xl font-semibold hover:underline ${
                  darkMode ? "text-red-400" : "text-red-700"
                }`}
              >
                {footerData.email}
              </a>
            </div>
          </section>

          {/* Sosyaller*/}
          <section className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
            {footerData.socials.map((social, index) => {
              const colorClass =
                social.name === ("Personal Blog" || "Kişisel Blog")
                  ? darkMode
                    ? "text-gray-300 hover:text-gray-500"
                    : "text-black hover:text-gray-300"
                  : social.name === "Github"
                  ? darkMode
                    ? "text-green-400 hover:text-gray-500"
                    : "text-green-600 hover:text-gray-300"
                  : social.name === "Linkedin"
                  ? darkMode
                    ? "text-blue-400 hover:text-gray-500"
                    : "text-blue-600 hover:text-gray-300"
                  : "";

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg md:text-2xl font-semibold ${colorClass}`}
                >
                  {social.name}
                </a>
              );
            })}
          </section>
        </div>
      </div>
    </footer>
  );
}
