import { FaHandPointRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12 md:py-24">
      <div className="px-4 md:px-16 lg:px-32">
        {/* Başlık */}
        <div className="text-left mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Let's work together on <br /> your next product.
          </h2>
        </div>

        {/* Eposta ve Sosyal Medya */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Eposta */}
          <section className="flex items-center gap-2">
            <FaHandPointRight className="text-yellow-400 text-xl md:text-2xl" />
            <a
              href="mailto:fatihsuslu98@gmail.com"
              className="text-red-700 hover:underline text-lg md:text-2xl"
            >
              fatihsuslu98@gmail.com
            </a>
          </section>

          {/* Sosyal Medya */}
          <section className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl font-semibold text-black hover:text-gray-300"
            >
              Personal Blog
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl font-semibold text-green-600 hover:text-gray-300"
            >
              Github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl font-semibold text-blue-600 hover:text-gray-300"
            >
              LinkedIn
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
