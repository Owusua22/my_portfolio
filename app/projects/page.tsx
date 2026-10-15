import type { Metadata } from "next";
import { projects } from "./projects-data";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore production e-commerce platforms, AI health applications, and full-stack web projects built by Sarah Nkansah — full-stack developer in Ghana.",
  openGraph: {
    title: "Projects — Sarah Nkansah",
    description:
      "Production e-commerce platforms, AI health applications, and full-stack web projects by Sarah Nkansah.",
    url: "https://sarahnkansah.com/projects",
  },
  alternates: {
    canonical: "https://sarahnkansah.com/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
