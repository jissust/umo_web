import Image from "next/image";
import { notFound } from "next/navigation";
import { newsMock } from "@/mocks/news";

type Props = {
  params: {
    slug: string;
  };
};

export default async function NoticiaDetalle({ params }: Props) {
  const { slug } = await params;

  const noticia = newsMock.find((n) => n.slug === slug);
  
  if (!noticia) return notFound();

  return (
    <article className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          {noticia.title}
        </h1>

        <p className="mt-4 text-lg text-gray-600 text-center">
          {noticia.description}
        </p>

        <div className="mt-8 relative w-full h-[300px] md:h-[400px]">
          <Image
            src={noticia.image}
            alt={noticia.title}
            fill
            className="object-cover"
          />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          {noticia.date}
        </p>

        <div className="mt-8 text-gray-800 leading-relaxed space-y-4">
          <p>{noticia.text}</p>
        </div>
      </div>
    </article>
  );
}