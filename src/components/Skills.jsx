export default function Skills() {
  const skills = [
    { icon: "/js-icon.png", name: "JavaScript" },
    { icon: "/react-icon.png", name: "React" },
    { icon: "/node-icon.png", name: "Node.js" },
    { icon: "/vscode-icon.png", name: "VS Code" },
    { icon: "/redux-icon.png", name: "Redux" },
    { icon: "/figma-icon.png", name: "Figma" },
  ];
  return (
    <div className="p-12 bg-white">
      <h3 className="text-3xl font-bold text-center mb-8">My Skills</h3>
      <div className="flex justify-center space-x-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={skill.icon} alt={skill.name} className="w-16 h-16 mb-2" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
