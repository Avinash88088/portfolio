import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE_URL}/og-image.png`,
        `${SITE_URL}/avinash-photo.jpg`,
      ],
    },
  ];
}
