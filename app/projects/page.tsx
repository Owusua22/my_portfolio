import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";
import { projects } from "./projects-data";

const siteUrl = "https://sarahnkansah.com";

export const metadata: Metadata = {
  title: "Web, Mobile & AI Development Projects | Sarah Nkansah",
  description:
    "Explore e-commerce, mobile, artificial intelligence, and cloud web applications developed by Sarah Nkansah, including Franko Trading and Cell7 AI.",
  keywords: [
    "Sarah Nkansah projects",
    "Sarah Nkansah portfolio",
    "Full-stack developer Ghana",
    "Software developer Ghana",
    "Mobile app developer Ghana",
    "E-commerce developer Ghana",
    "AI web application development",
    "Franko Trading website",
    "Franko Trading mobile app",
    "Cell7 AI",
    "AWS Amplify developer",
  ],
  authors: [
    {
      name: "Sarah Nkansah",
      url: siteUrl,
    },
  ],
  creator: "Sarah Nkansah",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/projects`,
    title: "Web, Mobile & AI Development Projects | Sarah Nkansah",
    description:
      "Explore production e-commerce, mobile, AI, and cloud applications developed by Sarah Nkansah.",
    siteName: "Sarah Nkansah",
    locale: "en_GH",
    images: [
      {
        url: `${siteUrl}/images/projects/projects-og.webp`,
        width: 1200,
        height: 630,
        alt: "Web, mobile and AI development projects by Sarah Nkansah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web, Mobile & AI Development Projects | Sarah Nkansah",
    description:
      "Explore production e-commerce, mobile, AI, and cloud applications developed by Sarah Nkansah.",
    images: [`${siteUrl}/images/projects/projects-og.webp`],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Software Development Projects by Sarah Nkansah",
  headline: "Web, Mobile, E-Commerce and AI Development Projects",
  description:
    "A collection of production e-commerce, mobile, artificial intelligence, and cloud applications developed by Sarah Nkansah.",
  url: `${siteUrl}/projects`,
  author: {
    "@type": "Person",
    name: "Sarah Nkansah",
    url: siteUrl,
    jobTitle: "Full-Stack Software Developer and UI/UX Designer",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => {
      const primaryLink = project.links[0];
      const appStoreLink = project.links.find(
        (link) => link.type === "app-store",
      );
      const playStoreLink = project.links.find(
        (link) => link.type === "google-play",
      );

      return {
        "@type": "ListItem",
        position: index + 1,
        url:
          primaryLink?.href ??
          `${siteUrl}/projects#${project.slug}`,
        item: {
          "@type": "SoftwareApplication",
          name: project.title,
          description: project.description,
          applicationCategory: project.category,
          operatingSystem:
            appStoreLink || playStoreLink
              ? "Web, iOS, Android"
              : "Web",
          keywords: project.technologies.join(", "),
          author: {
            "@type": "Person",
            name: "Sarah Nkansah",
            url: siteUrl,
          },
          ...(project.screenshot && {
            image: `${siteUrl}${project.screenshot.src}`,
            screenshot: `${siteUrl}${project.screenshot.src}`,
          }),
          ...(primaryLink && {
            url: primaryLink.href,
          }),
          sameAs: project.links.map((link) => link.href),
        },
      };
    }),
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <ProjectsClient projects={projects} />
    </>
  );
}