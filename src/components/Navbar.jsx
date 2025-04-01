import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";
import data from "../data/db.json";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  const navbarData = data.navbar;

  const darkModeText = darkMode
    ? navbarData.lightModeText?.[language] || navbarData.lightModeText?.["en"]
    : navbarData.darkModeText?.[language] || navbarData.darkModeText?.["en"];

  const languageToggle =
    navbarData.languageToggle[language] || navbarData.languageToggle["en"];
  const links = navbarData.links[language] || navbarData.links["en"];

  return (
    <header
      className={`px-4 md:px-16 lg:px-32 py-4 md:py-8 flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <section className="flex items-center justify-between md:justify-end space-x-4 px-3 py-4">
        {/* Dark Mode Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            className="flex items-center bg-purple-600 w-12 h-6 md:w-14 md:h-7 rounded-full p-1 relative transition-all"
          >
            <div
              className={`w-4 h-4 md:w-5 md:h-5 bg-yellow-400 rounded-full shadow-md transform transition-all ${
                darkMode ? "translate-x-6 md:translate-x-7" : "translate-x-0"
              }`}
            ></div>
          </button>
          <p className="text-gray-500 font-semibold tracking-widest">
            {darkModeText}
          </p>
        </div>
        <hr
          className={`hidden md:block h-5 w-px ${
            darkMode ? "bg-gray-300" : "bg-gray-400"
          }`}
        />
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className={`${
            darkMode ? "text-blue-300" : "text-blue-600"
          } font-semibold`}
        >
          <span
            className={`hidden md:inline ${
              darkMode ? "text-gray-400" : "text-gray-500"
            } font-semibold tracking-widest`}
          >
            {languageToggle.text}{" "}
          </span>
          <span
            className={`${
              darkMode ? "text-blue-300" : "text-blue-600"
            } font-semibold tracking-widest`}
          >
            {languageToggle.language}
          </span>
        </button>
      </section>
      <nav>
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <div
            className={`hidden md:flex w-16 h-16 items-center justify-center ${
              darkMode
                ? "bg-gray-700 text-gray-300"
                : "bg-indigo-100 text-indigo-800"
            } rounded-full rotate-[30deg] font-bold text-4xl`}
          >
            F
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm md:text-lg ${
                  darkMode
                    ? `text-gray-400 hover:text-gray-200 ${
                        link.id === "hire-me"
                          ? "border border-gray-400 rounded-lg"
                          : ""
                      }`
                    : `text-gray-500 hover:text-indigo-800 ${
                        link.id === "hire-me"
                          ? "border border-indigo-500 rounded-lg"
                          : ""
                      }`
                } font-medium px-4 md:px-8 py-2 md:py-3`}
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
