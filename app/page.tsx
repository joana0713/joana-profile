"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Engineer",
  "Frontend Developer"
];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    if (charIndex < current.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + current[charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    <>
      <section id="home" className="hero">
        <div className="overlay">
          <div className="hero-content">
            <h1 className="hero-name">Joana Kelly</h1>

            <h2 className="hero-role">
              I'm <span className="typing">{text}</span>
            </h2>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
        <section id="about" className="about">
          <div className="about-container">
            <h2 className="section-title">About</h2>
            <div className="underline"></div>

            <div className="about-content">
              <div className="about-image">
                <img src="/profile.png" alt="about" />
              </div>

              <div className="about-info">
                <h3>Full-Stack Engineer & Web Developer.</h3>

                <div className="info-grid">
                  <p><strong>Birthday:</strong> 13 July 1998</p>
                  <p><strong>Age:</strong> 27</p>
                  <p><strong>Website:</strong> joanakelly.dev</p>
                  <p><strong>Degree:</strong> BSc Computer Science</p>
                  <p><strong>Phone:</strong> +1 000 000 000</p>
                  <p><strong>Email:</strong> joana0713kelly@outlook.com</p>
                  <p><strong>City:</strong> United State</p>
                  <p><strong>Freelance:</strong> Available</p>
                </div>

                <p className="about-text">
                  Senior Full-Stack Developer with 5+ years experience building scalable SaaS
                  applications using React, Next.js, Node.js and Laravel.
                </p>
              </div>
            </div>

            {/* ===== STATS ===== */}
            <div className="stats">
              <div className="stat-box">
                <h3>232</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-box">
                <h3>521</h3>
                <p>Projects</p>
              </div>
              <div className="stat-box">
                <h3>1453</h3>
                <p>Hours Of Support</p>
              </div>
              <div className="stat-box">
                <h3>32</h3>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}