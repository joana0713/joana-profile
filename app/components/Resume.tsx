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
            <h2 className="resume-subtitle">Summary</h2>

            <div className="resume-item">
              <h3>Joana Kelly</h3>
              <p style = {{marginTop: '7px'}}>
                I build and support production web applications used by over 1,000 active users. I work across frontend
                and backend and take ownership of the systems I ship, staying involved to ensure they remain stable and
                maintainable over time. I care about delivering features that teams and users can depend on.
              </p>
              <ul>
                <li>Raleigh, NC, United States</li>
                <li>joana0713kelly@outlook.com</li>
              </ul>
            </div>


            <h2 className="resume-subtitle">Education</h2>

            <div className="resume-item">
              <h3>BSc Computer Science</h3>
              <span className="resume-date">North Carolina State University</span>
              <p>
                Strong foundation in algorithms, data structures, software architecture,
                and database systems.
              </p>
            </div>

            <div className="resume-item">
              <h3>Advanced Web Development</h3>
              <span className="resume-date">Self-driven Professional Development</span>
              <p>
                Focused on modern full-stack architecture, scalable systems,
                and cloud-ready applications.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="resume-right">

            <h2 className="resume-subtitle">Professional Experience</h2>

            <div className="resume-item">
              <h3>Senior Full-Stack Developer</h3>
              <span className="resume-date">Remote · 2022 - Present</span>
              <ul>
                <li>Built scalable SaaS applications using React, Next.js, Node.js</li>
                <li>Designed REST APIs and optimized database performance</li>
                <li>Improved application performance by 30% through refactoring</li>
              </ul>
            </div>

            <div className="resume-item">
              <h3>Full-Stack Developer</h3>
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