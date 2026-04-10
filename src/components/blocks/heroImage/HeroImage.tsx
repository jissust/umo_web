export const HeroImage = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <img
        src="/hero.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay oscuro (opcional pero recomendado) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Bienvenidos a <span className="text-orange-400">Gourmet Italiano</span>
          </h1>

          <p className="mt-4 text-lg text-gray-200 max-w-xl">
            Experiencia culinaria de primer nivel
          </p>

          <button className="mt-6 bg-orange-400 text-black px-6 py-3 rounded-md font-medium hover:bg-orange-300 transition">
            Reservar Mesa →
          </button>
        </div>
      </div>
    </section>
  );
};