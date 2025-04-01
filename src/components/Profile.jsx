import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { ThemeContext } from "../contexts/ThemeContext";
import data from "../data/db.json";

export default function Profile() {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(ThemeContext);
  const profileData = data.profile[language] || data.profile["en"]; // Varsayılan dil İngilizce

  return (
    <section
      className={`px-8 md:px-16 lg:px-32 py-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
        {language === "en" ? "Profile" : "Profil"}
      </h2>
      <div className="flex flex-col md:flex-row  gap-8 md:gap-60">
        {/* Profile Info */}
        <article className="flex flex-col gap-6 max-w-lg">
          <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4">
            {language === "en" ? "Profile" : "Profil"}
          </h3>
          {profileData.profileInfo.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row text-base md:text-lg"
            >
              <span className="font-bold sm:w-1/3">{item.label}:</span>
              <span className="mt-1 sm:mt-0 sm:ml-2 sm:w-2/3">
                {item.value}
              </span>
            </div>
          ))}
        </article>

        {/* About Me */}
        <article className="flex flex-col max-w-lg mt-8 md:mt-0">
          <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600 mb-4">
            {language === "en" ? "About Me" : "Hakkımda"}
          </h3>
          <p
            className={`${
              darkMode ? "text-gray-300" : "text-gray-700"
            } whitespace-pre-line text-lg`}
          >
            {profileData.aboutMe}
          </p>
        </article>
      </div>
    </section>
  );
}
