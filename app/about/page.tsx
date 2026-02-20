"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React / Next.js Engineer",
  "SaaS Builder",
];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
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
    <section className="hero">
      <div className="overlay">
        <div className="content">
          <h1>Joana Kelly</h1>
          <h2>
            I'm <span className="typing">{text}</span>
          </h2>
        </div>
      </div>
    </section>
  );
}