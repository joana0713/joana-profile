"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { projectDetails } from "../../data/projectDetails";
import { useState, useEffect, useRef } from "react";

export default function PortfolioDetail() {
  const params = useParams();
  const id = Number(params.id);
  const project = projectDetails.find((p) => p.id === id);

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startX = useRef(0);
  const isDragging = useRef(false);

  if (!project) return <div>Project not found</div>;

  const slideCount = project.images.length;

  // 🔥 
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    startAutoSlide();
  };

  // 🔥 
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const diff = e.clientX - startX.current;

    if (diff > 70) {
      setCurrent((prev) =>
        prev === 0 ? slideCount - 1 : prev - 1
      );
    } else if (diff < -70) {
      setCurrent((prev) => (prev + 1) % slideCount);
    }

    isDragging.current = false;
    resetInterval();
  };

  return (
    <>
      {/* HEADER */}
      <div className="detail-header">
        <h2>Portfolio Details</h2>
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span> / Portfolio Details</span>
        </div>
      </div>

      <section className="portfolio-details">

        {/* SLIDER */}
        <div
          className="slider-wrapper"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => (isDragging.current = false)}
        >
          <div
            className="slider"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {project.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={project.title}
                draggable={false}
              />
            ))}
          </div>

          <div className="detail-dots">
            {project.images.map((_, index) => (
              <span
                key={index}
                className={current === index ? "detail-dot active" : "detail-dot"}
                onClick={() => {
                  setCurrent(index);
                  resetInterval();
                }}
              />
            ))}
          </div>
        </div>

        {/* INFO */}
        <div className="project-info">

          <div className="info-card">
            <h2>Project Information</h2>
            <div className="divider" />
            <ul>
              <li><strong>Category:</strong> {project.category}</li>
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Date:</strong> {project.date}</li>
              <li className="flex">
                <strong>URL:</strong>{" "}
                <a href={project.url} target="_blank" style = {{textDecoration: 'none'}}>
                  <p className="detail-url">{project.url}</p>
                </a>
              </li>
            </ul>
          </div>

          <h2 className="project-title">{project.title}</h2>
          <p className="project-desc">{project.description}</p>

        </div>

      </section>
    </>
  );
}