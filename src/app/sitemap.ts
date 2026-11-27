import type { MetadataRoute } from "next";

const base = "https://www.thorlekterapi.dk";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/terapi/tilgang", "/terapi/droemmearbejde", "/terapi/krop", "/terapi/meditation", "/ommig", "/priser", "/kontakt"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}