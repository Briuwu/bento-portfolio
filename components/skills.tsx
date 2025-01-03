const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "ShadCN", "Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "SQL", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VSCode", "Figma"],
  },
];

export const Skills = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3">
        {skills.map((skill) => (
          <div key={skill.title}>
            <p className="text-center text-sm font-bold">{skill.title}</p>
            <ul className="mt-1 flex flex-wrap justify-center gap-2 text-xs">
              {skill.items.map((item) => (
                <li key={item} className="rounded-lg bg-yellow p-1 text-black">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
