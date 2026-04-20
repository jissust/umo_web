import Image from "next/image";
import { notFound } from "next/navigation";
import { NewsItem } from "@/types/news";

type Props = {
  params: {
    slug: string;
  };
};

const allNews: NewsItem[] = [
  {
    id: 1,
    slug: "nueva-carta-temporada",
    image: "/img/presentation.jpg",
    date: "10 Abril 2026",
    title: "Nueva carta de temporada",
    description: "Descubrí los nuevos sabores que incorporamos para esta temporada.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.",  
  },
  {
    id: 2,
    slug: "evento-especial",
    image: "/img/presentation.jpg",
    date: "5 Abril 2026",
    title: "Evento especial",
    description: "Una noche única con menú degustación y maridaje exclusivo.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.",  
  },
  {
    id: 3,
    slug: "renovamos-espacio",
    image: "/img/presentation.jpg",
    date: "28 Marzo 2026",
    title: "Renovamos el espacio",
    description:
      "Un ambiente más moderno y acogedor para mejorar tu experiencia.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.",  
  },
  {
    id: 4,
    slug: "chef-invitado",
    image: "/img/presentation.jpg",
    date: "20 Marzo 2026",
    title: "Chef invitado",
    description: "Una experiencia gastronómica única con chef internacional.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.",  
  },
  {
    id: 5,
    slug: "menu-degustacion",
    image: "/img/presentation.jpg",
    date: "15 Marzo 2026",
    title: "Nuevo menú degustación",
    description: "Un recorrido por nuestros mejores platos.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.",
  },
  {
    id: 6,
    slug: "terraza-abierta",
    image: "/img/presentation.jpg",
    date: "10 Marzo 2026",
    title: "Terraza abierta",
    description: "Disfrutá de nuestras noches al aire libre.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.",
  },
  {
    id: 7,
    slug: "evento-vinos",
    image: "/img/presentation.jpg",
    date: "1 Marzo 2026",
    title: "Evento de vinos",
    description: "Cata exclusiva con bodegas seleccionadas.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, neque at interdum varius, justo sapien fermentum elit, vel vulputate risus mauris vel lacus.",
  },
];

export default async function NoticiaDetalle({ params }: Props) {
  const { slug } = await params;

  const noticia = allNews.find((n) => n.slug === slug);
  
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