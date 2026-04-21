import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";

export const OurLetter = () => {
  return (
    <section className="w-full py-24 bg-white text-black">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Descubrí nuestra carta
        </h1>

        <p className="mt-4 text-black text-sm md:text-base">
          Explorá sabores únicos y experiencias culinarias diseñadas para cada
          ocasión.
        </p>

        <ButtonLink
          href="/carta"
          bgColor="bg-gradient-to-b from-[#F1DF7D] to-[#E19025]"
          textColor="text-black"
          target="_self"
        >
          Ver carta →
        </ButtonLink> 
      </div>
    </section>
  );
};
