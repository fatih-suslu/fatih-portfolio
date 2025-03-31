import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="px-4 md:px-16 lg:px-32 py-4 md:py-8 flex flex-col">
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
            DARK MODE
          </p>
        </div>
        <hr className="hidden md:block h-5 w-px bg-gray-400" />
        {/* Language Toggle */}
        <button
          onClick={toggleLanguage}
          className="text-blue-600 font-semibold"
        >
          {language === "EN" ? (
            <>
              <span className="text-blue-600 font-semibold tracking-widest">
                TÜRKÇE
              </span>
              <span className="hidden md:inline text-gray-500 font-semibold tracking-widest">
                ’YE GEÇ
              </span>
            </>
          ) : (
            <>
              <span className="hidden md:inline text-gray-500 font-semibold tracking-widest">
                SWITCH TO{" "}
              </span>
              <span className="text-blue-600 font-semibold tracking-widest">
                ENGLISH
              </span>
            </>
          )}
        </button>
      </section>
      <nav>
        <div className="flex flex-col md:flex-row items-center justify-between py-4">
          <div className="hidden md:flex w-16 h-16 items-center justify-center bg-indigo-100 text-indigo-800 rounded-full rotate-[30deg] font-bold text-4xl">
            F
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <a
              href="#skills"
              className="text-sm md:text-lg text-gray-500 hover:text-indigo-800 font-medium px-4 md:px-8 py-2 md:py-3"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm md:text-lg text-gray-500 hover:text-indigo-800 font-medium px-4 md:px-8 py-2 md:py-3"
            >
              Projects
            </a>
            <a
              href="#hire-me"
              className="text-sm md:text-lg border border-indigo-800 text-indigo-800 px-4 md:px-8 py-2 md:py-3 rounded-lg font-medium hover:bg-indigo-800 hover:text-white"
            >
              Hire me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
