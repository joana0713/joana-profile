"use client";

import { useEffect, useState } from "react";
import { Home, User } from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start", // ← 화면 맨 위에 위치
      });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/profile.png" alt="profile" />
        <h2>Joana Kelly</h2>
      </div>

      <nav>
        <ul>
          <li className={active === "home" ? "active" : ""}  onClick={() => scrollToSection("home")}>
            <Home size={18} /> Home
          </li>
          <li className={active === "about" ? "active" : ""}  onClick={() => scrollToSection("about")}>
            <User size={18} /> About
          </li>
        </ul>
      </nav>
    </aside>
  );
}
