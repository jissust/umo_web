"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { NewsCard } from "@/components/ui/newsCard/NewsCard";
import { NewsItem } from "@/types/news";
import { SkeletonCard } from "@/components/ui/skeletons/SkeletonCard";
import { newsMock } from "@/mocks/news";

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [visibleItems, setVisibleItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  const loadMore = useCallback(() => {
    if (loading) return;
    if (visibleItems.length >= newsMock.length) return;

    setLoading(true);

    setTimeout(() => {
      const nextItems = newsMock.slice(0, visibleItems.length + ITEMS_PER_PAGE);

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
    <section className="min-h-screen flex w-full pt-28 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold flex justify-center pb-5 text-gold">Noticias</h1>
        <p className="flex justify-center pb-5 text-sm md:text-base text-white">
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
    </section>
  );
}
