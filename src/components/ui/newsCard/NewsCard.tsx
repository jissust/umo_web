import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";
import { formatDate } from "@/utils/formatDate";

type Props = {
  item: NewsItem;
};

export const NewsCard = ({ item }: Props) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  
  return (
    <article className="w-full sm:w-[320px] lg:w-[360px] group text-white">
      <Link href={`/noticia/${item.slug}`} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <Image
            src={`${API_URL}${item.image[0]?.url}`}
            unoptimized
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-4">
          <p className="text-sm text-white">{formatDate(item?.publishedAt)}</p>

          <h3 className="mt-2  text-base md:text-lg font-bold group-hover:underline">
            {item.title}
          </h3>

          <p className="mt-2 text-white line-clamp-2 text-sm md:text-base">
            {item?.excerpt}
          </p>

          <span className="inline-block mt-4 text-sm text-white group-hover:text-gray-300 transition">
            Leer más →
          </span>
        </div>
      </Link>
    </article>
  );
};