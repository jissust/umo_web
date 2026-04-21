import { NewsCard } from "@/components/ui/newsCard/NewsCard";
import { newsMock } from "@/mocks/news";

const news = newsMock.slice(0, 3);

export const LatestNews = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold flex justify-center pb-10 text-white">Noticias</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
