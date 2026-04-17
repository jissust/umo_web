import { NewsCard } from "@/components/ui/newsCard/NewsCard";

const news = [
  {
    id: 1,
    slug: "nueva-carta-temporada",
    image: "/img/presentation.jpg",
    date: "10 Abril 2026",
    title: "Nueva carta de temporada",
    description:
      "Descubrí los nuevos sabores que incorporamos para esta temporada.",
  },
  {
    id: 2,
    slug: "evento-especial",
    image: "/img/presentation.jpg",
    date: "5 Abril 2026",
    title: "Evento especial",
    description: "Una noche única con menú degustación y maridaje exclusivo.",
  },
  {
    id: 3,
    slug: "renovamos-espacio",
    image: "/img/presentation.jpg",
    date: "28 Marzo 2026",
    title: "Renovamos el espacio",
    description:
      "Un ambiente más moderno y acogedor para mejorar tu experiencia.",
  },
];

export const LatestNews = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="flex flex-wrap justify-center gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
