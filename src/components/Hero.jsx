import photo from "../assets/photo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <main className="py-16 px-8 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between">
      {/* Sol*/}
      <section className="flex-1 text-left">
        <header>
          <div className="flex items-center justify-start">
            {/* Çizgi */}
            <div className="h-px w-16 md:w-32 bg-indigo-800 mr-3"></div>
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-700">
              Fatih Süslü
            </h2>
          </div>
        </header>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold my-8">
          Creative thinker <br /> Minimalism lover
        </h1>
        <p className="text-base md:text-lg lg:text-2xl text-gray-600 mb-8 leading-relaxed">
          Hi, I'm Fatih. I'm a full-stack developer. If you are looking for a
          <br />
          developer who can craft solid and scalable frontend products with
          <br />
          great user experiences. Let's shake hands with me.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-indigo-800 text-white text-xl font-semibold w-36 h-14 rounded-lg hover:text-gray-400 flex items-center justify-center">
            Hire me
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 text-xl font-semibold border border-indigo-800 w-36 h-14 rounded-lg hover:text-gray-400 flex items-center justify-center gap-2"
          >
            <FaGithub className="text-3xl" /> Github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 text-xl font-semibold border border-indigo-800 w-36 h-14 rounded-lg hover:text-gray-400 flex items-center justify-center gap-2"
          >
            <FaLinkedin className="text-3xl" /> Linkedin
          </a>
        </div>
      </section>

      {/* photo */}
      <figure className="mt-8 md:mt-0 max-w-xs md:max-w- lg:max-w-lg w-full mx-auto">
        <img
          src={photo}
          alt="photo"
          className="rounded-3xl w-full h-auto object-cover"
        />
      </figure>
    </main>
  );
}
