"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Code,
  FileText,
  ImageIcon,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

export default function Sidebar() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // ✅ IntersectionObserver 하나만 유지
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

        {/* ✅ Social Icons 추가 */}
        <div className="social">
            <a href="https://github.com/" target="_blank">
            <Github size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank">
            <Linkedin size={18} />
            </a>
            <a href="https://twitter.com/" target="_blank">
            <Twitter size={18} />
            </a>
            <a href="#">
            <Instagram size={18} />
            </a>
        </div>

        <nav>
            <ul>
                <li
                    className={active === "home" ? "active" : ""}
                    onClick={() => scrollToSection("home")}
                >
                    <Home size={18} /> Home
                </li>

                <li
                    className={active === "about" ? "active" : ""}
                    onClick={() => scrollToSection("about")}
                >
                    <User size={18} /> About
                </li>

                <li
                    className={active === "skills" ? "active" : ""}
                    onClick={() => scrollToSection("skills")}
                >
                    <Code size={18} /> Skills
                </li>

                <li
                    className={active === "resume" ? "active" : ""}
                    onClick={() => scrollToSection("resume")}
                    >
                    <FileText size={18} /> Resume
                </li>

                <li
                    className={active === "portfolio" ? "active" : ""}
                    onClick={() => scrollToSection("portfolio")}
                    >
                    <ImageIcon size={18} /> Portfolo
                </li>

                 <li
                    className={active === "contact" ? "active" : ""}
                    onClick={() => scrollToSection("contact")}
                    >
                    <Mail size={18} /> Contact
                </li>
            </ul>
        </nav>
    </aside>
  );
}