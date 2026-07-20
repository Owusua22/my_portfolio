import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://sarahnkansah.com/sitemap.xml",
    host: "https://sarahnkansah.com",
  };
}