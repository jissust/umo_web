import { ButtonLink } from "@/components/ui/buttonLink/ButtonLink";

export const HeroVideo = () => {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white">UMO</h1>

          <p className="mt-4 text-lg text-gray-200 max-w-xl">
            FIRE & STAKEHOUSE - CALA D'OR
          </p>

          <ButtonLink
            href="https://wa.me/34641467880"
            bgColor="bg-gradient-to-b from-[#F1DF7D] to-[#E19025]"
            textColor="text-black"
            target="_blank"
          >
            Reservar →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};
