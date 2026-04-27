import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { newsMock } from "@/mocks/news";
import { formatDate } from "@/utils/formatDate";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = newsMock.find((n) => n.slug === slug);

  if (!noticia) return {};

  return {
    title: noticia.title,
    description: noticia.description,
    openGraph: {
      title: noticia.title,
      type: "article",
      url: `https://umocalador.es/noticias/${noticia.slug}`,
      description: noticia.description,
      images: `https://umocalador.es${noticia.image}`,
    },
  };
}

async function getNoticia(slug: string) {
  const res = await fetch(
    `http://localhost:1337/api/news?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store", // o "force-cache" si querés cachear
    },
  );

  if (!res.ok) return null;

  const data = await res.json();

  return data.data[0]; // 👈 importante
}

export default async function NoticiaDetalle({ params }: Props) {
  const { slug } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const noticia = await getNoticia(slug);

  if (!noticia) return notFound();

  return (
    <article className="min-h-screen pt-30 pb-16 px-6 text-white max-w-4xl mx-auto">
      <header>
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          {noticia.title}
        </h1>

        <p className="mt-4 text-lg text-white text-center ">
          {noticia.excerpt}
        </p>
      </header>

      <figure className="mt-8 mb-4 relative w-full h-[300px] md:h-[400px]">
        <Image
          src={`${API_URL}${noticia.image[0]?.url}`}
          alt={noticia.title}
          unoptimized
          fill
          className="object-cover"
        />
      </figure>

      <time className="text-sm text-white">
        {formatDate(noticia.publishedAt)}
      </time>

      <section className="mt-4 text-white leading-relaxed space-y-4 text-sm md:text-base">
        <p>{noticia.content}</p>
      </section>
    </article>
  );
}
