"use client";

import { useEffect, useState } from "react";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "React Engineer"
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
                <h3 style = {{marginBottom: '45px'}}>Software Engineer | Full-Stack Engineer.</h3>

                <div className="info-grid">
                  <p><strong>Birthday:</strong> 13 July 1998</p>
                  <p><strong>Age:</strong> 27</p>
                  {/* <p><strong>Website:</strong> joanakelly.dev</p> */}
                  <p><strong>Degree:</strong> BSc Computer Science</p>
                  {/* <p><strong>Phone:</strong> +1 000 000 000</p> */}
                  <p><strong>Email:</strong> joana0713kelly@outlook.com</p>
                  <p><strong>City:</strong> United State</p>
                  <p><strong>Freelance:</strong> Available</p>
                </div>

                <p className="about-text">
                  Full-stack developer working on production web applications across frontend and backend. Experienced with React, Node.js, and database-backed systems. I aim to ship features that are stable, maintainable, and ready for real users.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
    </>
  );
}