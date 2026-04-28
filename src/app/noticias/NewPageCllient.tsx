"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { NewsCard } from "@/components/ui/newsCard/NewsCard";
import { NewsItem } from "@/types/news";
import { SkeletonCard } from "@/components/ui/skeletons/SkeletonCard";

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [visibleItems, setVisibleItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_URL}/api/news?populate=*&sort=publishedAt:desc`);
        const data = await res.json();
        setAllNews(data.data);
        setVisibleItems(data.data.slice(0, ITEMS_PER_PAGE));
      } catch (err) {
        console.error("Error fetching news:", err);
      } finally {
        setLoading(false);
        setIsLoaded(true);
      }
    };

    fetchNews();
  }, []);

  const loadMore = useCallback(() => {
    if (loading) return;
    if (visibleItems.length >= allNews.length) return;

    setLoading(true);

    setTimeout(() => {
      const nextItems = allNews.slice(0, visibleItems.length + ITEMS_PER_PAGE);

      setVisibleItems(nextItems);
      setLoading(false);
    }, 800);
  }, [loading, visibleItems, allNews]);

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
        rootMargin: "100px",
      },
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loadMore, loading]);

  return (
    <section className="min-h-screen max-w-7xl mx-auto px-6 pt-28 pb-6">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold flex justify-center pb-5 text-gold">
          Noticias
        </h1>
        <p className="flex justify-center pb-5 text-sm md:text-base text-white">
          Enterate de todas las novedades y eventos.
        </p>
      </header>

      {isLoaded && allNews.length === 0 && (
        <div className="text-center text-white py-10">
          No hay noticias disponibles
        </div>
      )}

      {allNews.length > 0 && (
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

          {loading &&
            Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)}
        </section>
      )}

      <div ref={loaderRef} className="h-10" />
    </section>
  );
}
