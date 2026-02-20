
type Project = {
  title: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    title: "SaaS Platform (Nordic Digital Systems)",
    description:
      "Contributed to development of a production SaaS platform serving 1,000+ active users. Improved frontend performance by 20% and maintained high-volume backend APIs with stable authentication architecture.",
    tech: ["Next.js", "TypeScript", "Node.js", "MySQL", "REST API"],
  },
  {
    title: "Internal Workflow Systems (TechNova Solutions Oy)",
    description:
      "Built and maintained 5+ internal web applications used by 200+ employees. Optimized MySQL queries, reducing API response time from ~600ms to ~320ms and implemented role-based access control (RBAC).",
    tech: ["React", "Laravel", "Express", "MySQL", "RBAC"],
  },
];

export default function Projects() {
  return (
    <section className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        Projects
      </h1>

      <div className="p-10 bg-neutral-900/60 backdrop-blur-sm border border-neutral-800 rounded-3xl hover:-translate-y-2 hover:border-white transition duration-300 shadow-xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-neutral-800 rounded-xl p-6 hover:border-white transition"
          >
            <h2 className="text-xl font-semibold mb-4">
              {project.title}
            </h2>

            <p className="text-neutral-400 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs border border-neutral-700 px-2 py-1 rounded-md text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}