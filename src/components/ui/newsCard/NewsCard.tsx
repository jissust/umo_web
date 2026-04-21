import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";

type Props = {
  item: NewsItem;
};

export const NewsCard = ({ item }: Props) => {
  return (
    <article className="w-full sm:w-[320px] lg:w-[360px] group">
      <Link href={`/noticia/${item.slug}`} className="block">
        {/* Imagen */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Contenido */}
        <div className="mt-4">
          <p className="text-sm text-gray-500">{item.date}</p>

          <h3 className="mt-2  text-base md:text-lg font-bold group-hover:underline">
            {item.title}
          </h3>

          <p className="mt-2 text-gray-600 line-clamp-2 text-sm md:text-base">
            {item.description}
          </p>

          <span className="inline-block mt-4 text-sm text-black group-hover:text-gray-700 transition">
            Leer más →
          </span>
        </div>
      </Link>
    </article>
  );
};