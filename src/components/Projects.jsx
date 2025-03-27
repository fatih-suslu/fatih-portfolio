export default function Projects() {
  const projects = [
    {
      name: "React",
      image: "/path-to-react-image.jpg",
      description: "A JavaScript library for building user interfaces.",
      tags: ["JavaScript", "UI", "Library"],
    },
    {
      name: "Tailwind",
      image: "/path-to-tailwind-image.jpg",
      description:
        "A utility-first CSS framework for rapidly building custom designs.",
      tags: ["CSS", "Design", "Framework"],
    },
    {
      name: "Redux",
      image: "/path-to-redux-image.jpg",
      description: "A predictable state container for JavaScript apps.",
      tags: ["State Management", "JavaScript", "Predictable"],
    },
  ];

  return (
    <div className="p-12 bg-green-100">
      <h3 className="text-3xl font-bold text-center mb-8">Projects</h3>
      <div className="flex justify-center space-x-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden w-80"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">{project.name}</h4>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
