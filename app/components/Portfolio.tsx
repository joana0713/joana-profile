"use client";

import { useState } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Food Delivery App",
    category: "mobile",
    image: [
      "/portfolio/food-mobile-1.png",
      "/portfolio/food-mobile-2.png",
    ],
  },
  {
    id: 2,
    title: "Hotel Admin Dashboard",
    category: "web",
    image: [
      "/portfolio/hotel-admin-1.png",
      "/portfolio/hotel-admin-2.png",
      "/portfolio/hotel-admin-3.png",
    ],
  },
  {
    id: 3,
    title: "Industrial B2B Platform",
    category: "web",
    image: [
      "/portfolio/industrial-1.png",
      "/portfolio/industrial-2.png",
    ],
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  const openGallery = (images: string[]) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  const closeGallery = () => {
    setSelectedImages(null);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    if (!selectedImages) return;
    setCurrentIndex((prev) =>
      prev === selectedImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedImages) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedImages.length - 1 : prev - 1
    );
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2 className="section-title">Portfolio</h2>

      {/* FILTER */}
      <div className="portfolio-filter">
        {["all", "web", "mobile"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat === "mobile" ? "Mobile App" : cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="portfolio-grid">
        {filtered.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <span className="badge">
              {item.category === "mobile" ? "Mobile App" : "Web"}
            </span>

            <Image
              src={item.image[0]} // 
              alt={item.title}
              width={800}
              height={500}
              className="portfolio-img"
            />

            <div className="overlay-portfolio">
              <div className="overlay-portfolio-icons">
                <div
                  className="icon-btn"
                  onClick={() => openGallery(item.image)}
                >
                  <Search size={17} />
                </div>


                <Link href={`/portfolio/${item.id}`} style = {{textDecoration: "none"}}>
                  <div className="icon-btn">
                    🔗
                  </div>
                </Link>
              </div>

              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* GALLERY MODAL */}
      {selectedImages && (
        <div className="modal" onClick={closeGallery}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <X className="close-btn" size={30} onClick={closeGallery} />

            <ChevronLeft
              className="nav-btn left"
              size={40}
              onClick={prevImage}
            />

            <Image
              src={selectedImages[currentIndex]}
              alt="Preview"
              width={1200}
              height={800}
              className="modal-img"
            />

            <ChevronRight
              className="nav-btn right"
              size={40}
              onClick={nextImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}