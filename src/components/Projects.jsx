import projectImg1 from "../assets/projects-img-1.png";
import projectImg2 from "../assets/projects-img-2.png";
import projectImg3 from "../assets/projects-img-3.png";

export default function Projects() {
  const projects = [
    {
      name: "Workintech",
      img: projectImg1,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "axios"],
      links: [
        { site: "GitHub", url: "https://github.com" },
        { site: "View Site", url: "https://example.com" },
      ],
    },
    {
      name: "Random Jokes",
      img: projectImg2,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "axios"],
      links: [
        { site: "GitHub", url: "https://github.com" },
        { site: "View Site", url: "https://example.com" },
      ],
    },
    {
      name: "Journey",
      img: projectImg3,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "axios"],
      links: [
        { site: "GitHub", url: "https://github.com" },
        { site: "View Site", url: "https://example.com" },
      ],
    },
  ];

  return (
    <section className="px-8 md:px-16 lg:px-32 py-16 mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
        Projects
      </h2>
      <div className="flex flex-wrap gap-6 justify-center md:justify-between w-full">
        {projects.map((project, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 w-full sm:w-[320px] mb-8 md:mb-0"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-auto"
            />
            <h3 className="text-2xl md:text-3xl font-semibold text-indigo-600">
              {project.name}
            </h3>
            <p className="text-gray-700">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm text-indigo-600 font-medium border border-indigo-600 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between gap-4">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 font-semibold underline hover:text-indigo-800"
                >
                  {link.site}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
