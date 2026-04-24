import type { Metadata } from "next";
import NewsPageClient from "./NewPageCllient";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Enterate de todas las novedades y eventos.",
  openGraph: {
    title: "Noticias - UMO | Fire & Steakhouse",
    description: "Enterate de todas las novedades y eventos.",
    url: "https://umo-test-01.netlify.app/noticias",
    images: [
      {
        url: "https://umo-test-01.netlify.app/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return <NewsPageClient />;
}
