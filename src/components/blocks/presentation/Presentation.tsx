import Image from "next/image";

export const Presentation = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Sobre nosotros</h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Somos un restaurante dedicado a ofrecer experiencias culinarias
              únicas, combinando tradición y creatividad en cada plato. Nuestro
              compromiso es brindar calidad, sabor y un ambiente inolvidable
              para cada cliente.
            </p>
          </div>

          <div className="w-full">
            <div className="relative aspect-square w-full overflow-hidden">
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
