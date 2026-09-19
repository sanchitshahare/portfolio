const skills = [
  "Flutter",
  "Dart",
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "SQL",
  "MongoDB",
  "Git",
  "React Native",
  "Node.js",
  "Express.js",
  "Firebase",
  "tailwindcss",
  "typeScript",
  ,
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className=" border border-slate-800 rounded-xl p-5 text-center"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}