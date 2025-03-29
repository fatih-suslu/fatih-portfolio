import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("EN");
  //geçici toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "TR" : "EN");
  };

  return (
    <div className="px-32 py-8 flex flex-col">
      <section className="flex items-center justify-end space-x-4 px-3 py-4">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="flex items-center bg-purple-600 w-14 h-7 rounded-full p-1 relative transition-all"
        >
          <div
            className={`w-5 h-5 bg-yellow-400 rounded-full shadow-md transform transition-all ${
              darkMode ? "translate-x-7" : "translate-x-0"
            }`}
          ></div>
        </button>
        <span className="text-gray-500 font-semibold tracking-widest">
          DARK MODE
        </span>
        {/* Dikey Çizgi */}
        <div className="h-5 w-px bg-gray-400"></div>
        {/* Dil Değiştirici */}
        <button
          onClick={toggleLanguage}
          className="text-blue-600 font-semibold"
        >
          {language === "EN" ? (
            <>
              <span className="text-blue-600 font-semibold tracking-widest">
                TÜRKÇE
              </span>
              <span className="text-gray-500 font-semibold tracking-widest">
                ’YE GEÇ
              </span>
            </>
          ) : (
            <>
              <span className="text-gray-500 font-semibold tracking-widest">
                SWITCH TO{" "}
              </span>
              <span className="text-blue-600 font-semibold tracking-widest">
                ENGLISH
              </span>
            </>
          )}
        </button>
      </section>
      <section>
        <div class="flex items-center justify-between  py-4">
          <div class="w-16 h-16 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full rotate-[30deg] font-bold text-4xl">
            F
          </div>

          <div class="flex items-center gap-6">
            <div class="text-lg text-gray-500 hover:text-indigo-800 font-medium cursor-pointer px-8 py-3">
              Skills
            </div>

            <div class="text-lg text-gray-500 hover:text-indigo-800 font-medium cursor-pointer px-8 py-3 ">
              Projects
            </div>

            <div class="text-lg border border-indigo-800 text-indigo-800 px-8 py-3 rounded-lg font-medium cursor-pointer hover:bg-indigo-800 hover:text-white">
              Hire me
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
