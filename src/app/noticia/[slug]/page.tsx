import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { newsMock } from "@/mocks/news";

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
      url: `https://umo-test-01.netlify.app/noticias/${noticia.slug}`,
      description: noticia.description,
      images:`https://umo-test-01.netlify.app${noticia.image}`,
    },
  };
}

export default async function NoticiaDetalle({ params }: Props) {
  const { slug } = await params;

  const noticia = newsMock.find((n) => n.slug === slug);

  if (!noticia) return notFound();

  return (
    <article className="min-h-screen pt-30 pb-16 px-6 text-white max-w-4xl mx-auto">
        <header>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            {noticia.title}
          </h1>

          <p className="mt-4 text-lg text-white text-center ">
            {noticia.description}
          </p>
        </header>

        <figure className="mt-8 mb-4 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={noticia.image}
            alt={noticia.title}
            fill
            className="object-cover"
          />
        </figure>

        <time className="text-sm text-white">{noticia.date}</time>

        <section className="mt-4 text-white leading-relaxed space-y-4 text-sm md:text-base">
          <p>{noticia.text}</p>
        </section>
    </article>
  );
}
