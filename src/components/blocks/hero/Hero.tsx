export const Hero = () => {
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

          <button className="mt-6 bg-orange-400 text-black px-6 py-3 rounded-md font-medium hover:bg-orange-300 transition">
            Reservar Mesa →
          </button>
        </div>
      </div>
    </section>
  );
};
