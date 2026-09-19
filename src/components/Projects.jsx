const projects = [
  {
    title: "AddOn",
    description: "Event Management Platform",
  },
  {
    title: "Commercial Property Holds",
    description: "Real Estate Website",
  },
  {
    title: "RoomEasy",
    description: "Frontend Development",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-10">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className=" border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}