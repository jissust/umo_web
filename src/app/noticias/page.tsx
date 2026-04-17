"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { NewsCard } from "@/components/ui/newsCard/NewsCard";
import { NewsItem } from "@/types/news";
import { SkeletonCard } from "@/components/ui/skeletons/SkeletonCard";

const allNews: NewsItem[] = [
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
  {
    id: 4,
    slug: "chef-invitado",
    image: "/img/presentation.jpg",
    date: "20 Marzo 2026",
    title: "Chef invitado",
    description: "Una experiencia gastronómica única con chef internacional.",
  },
  {
    id: 5,
    slug: "menu-degustacion",
    image: "/img/presentation.jpg",
    date: "15 Marzo 2026",
    title: "Nuevo menú degustación",
    description: "Un recorrido por nuestros mejores platos.",
  },
  {
    id: 6,
    slug: "terraza-abierta",
    image: "/img/presentation.jpg",
    date: "10 Marzo 2026",
    title: "Terraza abierta",
    description: "Disfrutá de nuestras noches al aire libre.",
  },
  {
    id: 7,
    slug: "evento-vinos",
    image: "/img/presentation.jpg",
    date: "1 Marzo 2026",
    title: "Evento de vinos",
    description: "Cata exclusiva con bodegas seleccionadas.",
  },
];

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [visibleItems, setVisibleItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(() => {
    if (loading) return;
    if (visibleItems.length >= allNews.length) return;

    setLoading(true);

    setTimeout(() => {
      const nextItems = allNews.slice(0, visibleItems.length + ITEMS_PER_PAGE);

      setVisibleItems(nextItems);
      setLoading(false);
    }, 800);
  }, [loading, visibleItems]);

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !loading) {
          loadMore();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "100px", // 👈 mejora UX (carga antes)
      },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loadMore, loading]);

  return (
    <div className="min-h-screen flex w-full pt-28 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="flex justify-center">Noticias</h1>
        <p className="flex justify-center pb-5">
          Enterate de todas las novedades y eventos.
        </p>
        {/* GRID */}
        <section
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8 
            justify-items-center
          "
        >
          {visibleItems.map((item) => (
            <div key={item.id} className="animate-fadeIn">
              <NewsCard item={item} />
            </div>
          ))}

          {/* SKELETON */}
          {loading &&
            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
        </section>

        {/* TRIGGER */}
        <div ref={loaderRef} className="h-10" />
      </div>
    </div>
  );
}
