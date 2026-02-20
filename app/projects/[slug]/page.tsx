import { notFound } from "next/navigation";

type Project = {
  title: string;
  description: string;
  tech: string;
};

const projects: Record<string, Project> = {
  opsboard: {
    title: "OpsBoard – Internal Dashboard",
    description:
      "A role-based admin dashboard built with Next.js and PostgreSQL.",
    tech: "Next.js, TypeScript, PostgreSQL",
  },
  saas: {
    title: "SaaS Platform System",
    description:
      "Subscription-based SaaS with authentication and scalable backend.",
    tech: "React, Node.js, MongoDB",
  },
};

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen px-6 py-32 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
      <p className="text-gray-400 text-lg mb-8">
        {project.description}
      </p>
      <div className="text-indigo-400">{project.tech}</div>
    </div>
  );
}