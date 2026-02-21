"use client";

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        <div className="underline"></div>

        <p className="resume-desc">
          Senior Full-Stack Engineer with 5+ years of experience building scalable
          web applications and SaaS platforms using modern technologies.
        </p>

        <div className="resume-grid">

          {/* LEFT COLUMN */}
          <div className="resume-left">

            <h3 className="resume-subtitle">Education</h3>

            <div className="resume-item">
              <h4>BSc Computer Science</h4>
              <span className="resume-date">University of Turku</span>
              <p>
                Strong foundation in algorithms, data structures, software architecture,
                and database systems.
              </p>
            </div>

            <div className="resume-item">
              <h4>Advanced Web Development</h4>
              <span className="resume-date">Self-driven Professional Development</span>
              <p>
                Focused on modern full-stack architecture, scalable systems,
                and cloud-ready applications.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-right">

            <h3 className="resume-subtitle">Professional Experience</h3>

            <div className="resume-item">
              <h4>Senior Full-Stack Developer</h4>
              <span className="resume-date">Remote · 2022 - Present</span>
              <ul>
                <li>Built scalable SaaS applications using React, Next.js, Node.js</li>
                <li>Designed REST APIs and optimized database performance</li>
                <li>Improved application performance by 30% through refactoring</li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Full-Stack Developer</h4>
              <span className="resume-date">2019 - 2022</span>
              <ul>
                <li>Developed enterprise-level applications using Laravel & MySQL</li>
                <li>Integrated third-party APIs and payment systems</li>
                <li>Collaborated with cross-functional teams in Agile environment</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}