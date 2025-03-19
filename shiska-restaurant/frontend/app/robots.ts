import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/unauthorized/"],
    },
    sitemap: "https://shiska-restaurant.com/sitemap.xml",
  }
}

