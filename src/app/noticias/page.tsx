import type { Metadata } from "next";
import NewsPageClient from "./NewPageCllient";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Enterate de todas las novedades y eventos.",
  openGraph: {
    title: "Noticias - UMO | Fire & Steakhouse",
    description: "Enterate de todas las novedades y eventos.",
    url: "https://umocalador.es/noticias",
    images: [
      {
        url: "https://umocalador.es/img/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function Page() {
  return <NewsPageClient />;
}
