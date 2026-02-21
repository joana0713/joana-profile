export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  images: string[];
  client: string;
  date: string;
  url: string;
  description: string;
}

export const projectDetails: ProjectDetail[] = [
  {
    id: 1,
    title: "Food Delivery App",
    category: "mobile",
    images: [
      "/portfolio/food-mobile-1.png",
      "/portfolio/food-mobile-2.png",
    ],
    client: "Startup Kitchen",
    date: "2023",
    url: "https://example.com",
    description:
      "A modern mobile-first food delivery application built with performance and UX in mind. Real-time order tracking, seamless checkout flow, and clean UI optimized for conversion.",
  },
  {
    id: 2,
    title: "Hotel Admin Dashboard",
    category: "web",
    images: [
      "/portfolio/hotel-admin-1.png",
      "/portfolio/hotel-admin-2.png",
      "/portfolio/hotel-admin-3.png",
    ],
    client: "Luxury Stay Group",
    date: "2022",
    url: "https://example.com",
    description:
      "Comprehensive admin dashboard for hotel management. Includes booking analytics, staff control, reporting system, and dynamic room availability management.",
  },
  {
    id: 3,
    title: "Industrial B2B Platform",
    category: "web",
    images: [
      "/portfolio/industrial-1.png",
      "/portfolio/industrial-2.png",
    ],
    client: "Global Industrial Co.",
    date: "2024",
    url: "https://example.com",
    description:
      "Enterprise-level B2B platform designed for industrial suppliers. Focused on scalable architecture, role-based permissions, and optimized procurement workflow.",
  },
];