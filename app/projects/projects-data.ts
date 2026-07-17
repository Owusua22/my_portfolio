export type ProjectCategory =
  | "E-Commerce"
  | "Artificial Intelligence"
  | "Full-Stack"
  | "Mobile";

export type ProjectLinkType =
  | "website"
  | "app-store"
  | "google-play"
  | "github";

export interface ProjectLink {
  type: ProjectLinkType;
  label: string;
  href: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  screenshot?: ProjectScreenshot;
  links: ProjectLink[];
  featured?: boolean;
  year?: string;
}

export const projects: Project[] = [
  {
    title: "Franko Trading",
    slug: "franko-trading",
    description:
      "A modern e-commerce ecosystem for discovering and purchasing consumer electronics. The platform delivers a consistent shopping experience across the web, iOS, and Android, with responsive product browsing and a streamlined customer journey.",
    technologies: [
      "E-Commerce",
      "Web Development",
      "Mobile Development",
      "iOS",
      "Android",
      "Responsive UI",
      "React JS",
      "SEO",
      "Tailwind",
      "React Native",
      "AWS",
    

    ],
    category: "E-Commerce",
    screenshot: {
      src: "/Franko1.png",
      alt: "Franko Trading e-commerce website displaying electronics, product categories, and promotional offers",
    },
    links: [
      {
        type: "website",
        label: "Visit website",
        href: "https://www.frankotrading.com/",
      },
      {
        type: "app-store",
        label: "App Store",
        href: "https://apps.apple.com/us/app/franko-trading/id6741319907",
      },
      {
        type: "google-play",
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.poldark.mrfranky2",
      },
    ],
    featured: true,
    year: "2025",
  },
  {
   title: "Cell7 AI",
slug: "cell7-ai",
description:
  "A responsive AI-powered health platform featuring a Health Risk Prediction Engine, Personalized Health Guidelines & Insights Engine, and an Intelligent Health Assistant. Built to deliver clinically informed health assessments, personalized wellness recommendations, and continuous AI-driven support through a fast, accessible, and scalable web experience.",
technologies: [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Artificial Intelligence",
  "Healthcare AI",
  "RAG",
  "Supabase",
  "Responsive Design",
  "Cloud Deployment",
],
    category: "Artificial Intelligence",
    screenshot: {
      src: "/cell7.png",
      alt: "Cell7 AI website displaying its artificial intelligence platform and digital product experience",
    },
    links: [
      {
        type: "website",
        label: "Visit Cell7 AI",
        href: "https://cell7.ai/",
      },
    ],
    featured: true,
    year: "2026",
  },
  {

title: "Hon. Mike Oquaye Official Website",
slug: "hon-mike-oquaye-website",
description:
  "Designed and developed the official website of Former Speaker of Parliament, Hon. Prof. Mike Oquaye. The platform showcases his legacy, leadership journey, publications, speeches, and articles through a modern, responsive, and accessible digital experience.",
technologies: [
  "Next.js",
  "React",
  "TypeScript",
  "MongoDB",
  "Node.js",
  "Tailwind CSS",
  "Responsive Design",


    ],
    category: "Full-Stack",
    screenshot: {
      src: "/mike.png",
      alt: "Responsive cloud web application deployed using AWS Amplify",
    },
    links: [
      {
        type: "website",
        label: "Open application",
        href: "https://staging.d2vnllid8vfrr6.amplifyapp.com/",
      },
    ],
    year: "2026",
  },
];