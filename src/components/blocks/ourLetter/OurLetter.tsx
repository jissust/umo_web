import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";

export const OurLetter = () => {
  return (
    <section className="w-full py-24 bg-gray-500 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Descubrí nuestra carta
        </h1>

        <p className="mt-4 text-gray-300 text-sm md:text-base">
          Explorá sabores únicos y experiencias culinarias diseñadas para cada
          ocasión.
        </p>

        <ButtonLink
          href="/carta"
          bgColor="bg-orange-400"
          textColor="text-black"
          hoverBgColor="hover:bg-orange-600"
          hoverTextColor="hover:bg-white"
          target="_self"
        >
          Ver carta →
        </ButtonLink> 
      </div>
    </section>
  );
};
