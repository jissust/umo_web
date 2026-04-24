import type { Metadata } from "next";
import NewsPageClient from "./NewPageCllient";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Enterate de todas las novedades y eventos.",
};

export default function Page() {
  return <NewsPageClient />;
}