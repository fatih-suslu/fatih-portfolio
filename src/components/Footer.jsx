export default function Footer() {
  return (
    <footer className="bg-gray-100  py-16">
      <div className="px-32">
        {/* Başlık */}
        <div className="text-left mb-12">
          <h2 className="text-5xl font-bold">
            Let's work together on <br /> your next product
          </h2>
        </div>

        {/* Eposta ve Sosyl Medya */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          {/* Eposta*/}
          <a
            href="fatihsuslu98@gmail.com"
            className="text-red-700 hover:underline text-lg"
          >
            fatihsuslu98@gmail.com
          </a>

          {/* Sosyal Medya*/}
          <section className="flex gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black hover:text-gray-400"
            >
              Personal Blog
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-green-600 hover:text-gray-400"
            >
              Github
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-blue-600 hover:text-gray-400"
            >
              LinkedIn
            </a>
          </section>
        </div>
      </div>
    </footer>
  );
}
