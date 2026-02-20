type Experience = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

const experiences = [
  {
    company: "Nordic Digital Systems",
    role: "Full-Stack Software Engineer",
    period: "Jan 2024 – Jan 2026 (Remote)",
    highlights: [
      "Led development of SaaS platform features used by 1,000+ active users",
      "Improved frontend performance by reducing initial load time by 20%",
      "Designed and maintained high-volume backend APIs",
      "Integrated third-party payment and analytics services",
      "Contributed to authentication and API architecture decisions"
    ],
  },
  {
    company: "TechNova Solutions Oy",
    role: "Full-Stack Software Engineer",
    period: "Jun 2021 – Dec 2023 (Hybrid, Finland)",
    highlights: [
      "Developed 5+ internal web applications for operational workflows",
      "Reduced API response time from ~600ms to ~320ms via query optimization",
      "Implemented RBAC system used by 200+ internal users",
      "Refactored legacy backend modules for maintainability"
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-12">
        Experience
      </h1>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-neutral-800 pl-6">
            <h2 className="text-xl font-semibold">
              {exp.role}
            </h2>
            <p className="text-neutral-400">
              {exp.company} | {exp.period}
            </p>

            <ul className="mt-4 space-y-2 text-neutral-400 list-disc list-inside">
              {exp.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}