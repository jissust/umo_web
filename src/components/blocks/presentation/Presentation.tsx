import Image from "next/image";

export const Presentation = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gold">Sobre nosotros</h1>

            <p className="mt-4 text-white leading-relaxed text-sm md:text-base">
              Somos un restaurante dedicado a ofrecer experiencias culinarias
              únicas, combinando tradición y creatividad en cada plato. Nuestro
              compromiso es brindar calidad, sabor y un ambiente inolvidable
              para cada cliente.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative aspect-square w-full sm:w-[70%] overflow-hidden">
              <Image
                src="/img/presentation.jpg"
                alt="Sobre nosotros"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
