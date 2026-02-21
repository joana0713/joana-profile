"use client";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="underline"></div>

        <p className="skills-desc">
          Full-Stack Engineer with 5+ years experience building scalable SaaS
          applications using modern web technologies.
        </p>

        <div className="skills-grid">
          {/* LEFT */}
          <div className="skill-item">
            <div className="skill-header">
              <span>React / Next.js</span>
              <span>95%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>TypeScript</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Node.js / Express</span>
              <span>88%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "88%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Laravel / PHP</span>
              <span>85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>MySQL / MongoDB</span>
              <span>85%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill-item">
            <div className="skill-header">
              <span>Tailwind / UI Design</span>
              <span>90%</span>
            </div>
            <div className="progress">
              <div className="progress-bar" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}