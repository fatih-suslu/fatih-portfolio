export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "React.Js",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Node.Js",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-16 lg:px-32 bg-white">
      {/* Başlık */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
        Skills
      </h2>

      {/* Skill Kartları */}
      <article className="flex flex-col md:flex-row justify-between gap-12">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-start max-w-sm">
            <h3 className="text-3xl font-semibold text-indigo-600 mb-4">
              {skill.name}
            </h3>
            <p className="text-gray-500">{skill.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
