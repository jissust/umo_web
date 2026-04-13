import Image from "next/image";
import Link from "next/link";

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
            <article key={item.id} className="w-full sm:w-[320px] lg:w-[360px]">
              {/* Imagen */}
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="mt-4">
                <p className="text-sm text-gray-500">{item.date}</p>

                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>

                <p className="mt-2 text-gray-600 line-clamp-2">
                  {item.description}
                </p>
                
                <Link
                  href={`/notice/${item.slug}`}
                  className="inline-block mt-4 text-sm font-medium text-black underline hover:text-gray-700 transition"
                >
                  Leer más →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
