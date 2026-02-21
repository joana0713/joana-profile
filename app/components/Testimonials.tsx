"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
};

const data: Testimonial[] = [
  {
    id: 1,
    name: "Emma Johnson",
    role: "UI/UX Designer",
    text: "Joana has an exceptional eye for detail. The interface she built for our product feels modern, intuitive, and incredibly smooth. She doesn't just write code — she thinks about the entire user experience.",
    image: "/testimonials/testimonial-1.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Product Manager",
    text: "From architecture planning to final deployment, everything was handled professionally. Clean React structure, solid backend logic, and zero unnecessary complexity. Very impressive execution.",
    image: "/testimonials/testimonial-2.jpg",
  },
  {
    id: 3,
    name: "Sophia Davis",
    role: "Startup Founder",
    text: "We needed a scalable full-stack solution under tight deadlines, and Joana absolutely delivered. Strong problem-solving skills and clear communication throughout the entire process.",
    image: "/testimonials/testimonial-3.jpg",
  },
  {
    id: 4,
    name: "Isabella Martinez",
    role: "Tech Lead",
    text: "Her understanding of system architecture and performance optimization is on another level. The backend was structured beautifully and the frontend felt polished and production-ready from day one.",
    image: "/testimonials/testimonial-4.jpg",
  },
  {
    id: 5,
    name: "Olivia Chen",
    role: "Marketing Director",
    text: "The dashboard Joana built gave our team clarity and control. Everything feels intentional, clean, and easy to navigate. It's rare to find someone who balances logic and design this well.",
    image: "/testimonials/testimonial-5.jpg",
  },
  {
    id: 6,
    name: "Ava Thompson",
    role: "CEO",
    text: "Reliable, focused, and incredibly efficient. Joana understands business needs and translates them directly into scalable technical solutions. Definitely someone you want on your team long term.",
    image: "/testimonials/testimonial-6.jpg",
  },
];

const testimonials = [
  data[data.length - 1],
  ...data,
  data[0],
];

export default function Testimonials() {
    const [index, setIndex] = useState(1);
    const [transition, setTransition] = useState(true);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [moveX, setMoveX] = useState(0);

    const trackRef = useRef<HTMLDivElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startAutoSlide = () => {
        stopAutoSlide();
        intervalRef.current = setInterval(() => {
        setIndex((prev) => prev + 1);
        }, 4000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
        clearInterval(intervalRef.current);
        }
    };

    const next = () => {
        setIndex((prev) => prev + 1);
        startAutoSlide(); // click => clear
    };

    const prev = () => {
        setIndex((prev) => prev - 1);
        startAutoSlide();
    };

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

    // handle border
    useEffect(() => {
        const handleTransitionEnd = () => {
        if (index === testimonials.length - 1) {
            setTransition(false);
            setIndex(1);
        }
        if (index === 0) {
            setTransition(false);
            setIndex(testimonials.length - 2);
        }
        };

        const track = trackRef.current;
        track?.addEventListener("transitionend", handleTransitionEnd);
        return () =>
        track?.removeEventListener("transitionend", handleTransitionEnd);
    }, [index]);

    useEffect(() => {
        if (!transition) {
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
            setTransition(true);
            });
        });
        }
    }, [transition]);

    const handleStart = (clientX: number) => {
        setIsDragging(true);
        setStartX(clientX);
        stopAutoSlide();
        };

        const handleMove = (clientX: number) => {
        if (!isDragging) return;
        setMoveX(clientX - startX);
        };

        const handleEnd = () => {
        if (!isDragging) return;

        if (moveX > 100) {
            prev();
        } else if (moveX < -100) {
            next();
        }

        setIsDragging(false);
        setMoveX(0);
        startAutoSlide();
    };

    return (
        <section className="testimonials">
            <div className="carousel"
                onMouseDown={(e) => handleStart(e.clientX)}
                onMouseMove={(e) => handleMove(e.clientX)}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                onTouchEnd={handleEnd}
            >
                <div
                ref={trackRef}
                className="carousel-track"
                style={{
                        transform: `translateX(calc(-${(index - 1) * 33.333}% + ${moveX}px))`,
                        transition: isDragging
                            ? "none"
                            : transition
                            ? "transform 0.6s ease"
                            : "none",
                    }}
                >
                {testimonials.map((item, i) => (
                    <div
                    key={i}
                    className={
                        i === index
                        ? "testimonial-card active"
                        : "testimonial-card"
                    }
                    >
                    <p>"{item.text}"</p>
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={110}
                        height={110}
                        className="testimonial-img"
                    />
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                    </div>
                ))}
                </div>
            </div>

            {/* DOTS */}
            <div className="dots">
                {data.map((_, i) => (
                <span
                    key={i}
                    className={index - 1 === i ? "dot active" : "dot"}
                    onClick={() => {
                    setIndex(i + 1);
                    startAutoSlide(); // Main
                    }}
                />
                ))}
        </div>
        </section>
    );
}