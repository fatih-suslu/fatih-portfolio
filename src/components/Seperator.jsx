import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Seperator() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`border-t mx-4 md:mx-32 ${
        darkMode ? "border-gray-600" : "border-gray-400"
      }`}
    ></div>
  );
}
