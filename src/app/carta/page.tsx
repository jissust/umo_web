import Image from "next/image";
import { MenuCategories } from "@/components/blocks/menuCategories/MenuCategories";
import { FaUtensils, FaWineGlass, FaIceCream } from "react-icons/fa";

const categories = [
  {
    name: "Entradas",
    icon: <FaUtensils />,
    file: "/pdf/entradas.pdf",
  },
  {
    name: "Bebidas",
    icon: <FaWineGlass />,
    file: "/pdf/bebidas.pdf",
  },
  {
    name: "Postres",
    icon: <FaIceCream />,
    file: "/pdf/postres.pdf",
  },
];

export default function CartaPage() {
  return (
    <div className="min-h-screen flex w-full pt-28 pb-6 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <Image
          src="/next.svg"
          alt="Nombre del restaurante"
          width={150}
          height={150}
          priority
          style={{ display: "block", margin: "0 auto" }}
        />

        <h2 className="flex justify-center py-5 text-sm md:text-base">
          Bienvenido a nuestro restaurante. Descubrí nuestras opciones de menú
          cuidadosamente preparadas.
        </h2>

        <MenuCategories categories={categories} />
      </div>
    </div>
  );
}
