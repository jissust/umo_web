import Link from "next/link";

export const OurLetter = () => {
  return (
    <section className="w-full py-24 bg-gray-500 text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold">
          Descubrí nuestra carta
        </h2>

        <p className="mt-4 text-gray-300">
          Explorá sabores únicos y experiencias culinarias diseñadas para cada
          ocasión.
        </p>

        <Link
          href="/carta"
          className="inline-flex items-center mt-8 px-8 py-3 bg-orange-400 text-black rounded-md font-semibold hover:bg-orange-300 transition"
        >
          Ver carta →
        </Link>
      </div>
    </section>
  );
};
