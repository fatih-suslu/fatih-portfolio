import photo from "../assets/photo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="py-16 px-8 md:px-32 flex flex-col md:flex-row items-center justify-between">
      {/* Sol */}
      <section className="flex-1 text-left">
        <section>
          <div className="flex items-center justify-start">
            {/* Çizgi */}
            <div className="h-px w-32 bg-indigo-800 mr-3"></div>
            <h1 className="text-2xl font-semibold text-indigo-700">
              Fatih Süslü
            </h1>
          </div>
        </section>
        <h1 className="text-8xl font-bold my-8">
          Creative thinker <br /> Minimalism lover
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Hi, I'm Fatih. I'm a full-stack developer. If you are looking for a
          <br />
          developer who can craft solid and scalable frontend products with
          <br />
          great user experiences. Let's shake hands with me.
        </p>
        <div className="flex gap-4">
          <button className="bg-indigo-800 text-white px-11 py-4 rounded-lg hover:text-gray-400">
            Hire me
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 border border-indigo-800 px-8 py-4 rounded-lg hover:text-gray-400 flex items-center gap-2"
          >
            <FaGithub /> Github
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-800 border border-indigo-800 px-8 py-4 rounded-lg hover:text-gray-400 flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </section>

      {/* Sağ Foto*/}
      <div className="">
        <img src={photo} alt="photo" className=" rounded-3xl" />
      </div>
    </div>
  );
}
