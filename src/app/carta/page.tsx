import Image from "next/image";
import { MenuCategories } from "@/components/blocks/menuCategories/MenuCategories";

const categories = [
  {
    name: "Entradas",
    icon: "🍽️",
    file: "/pdf/entradas.pdf",
  },
  {
    name: "Platos principales",
    icon: "🍝",
    file: "/pdf/principales.pdf",
  },
  {
    name: "Bebidas",
    icon: "🍷",
    file: "/pdf/bebidas.pdf",
  },
];

export default function CartaPage() {
  return (
    <div className="min-h-screen flex w-full pt-28 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <Image
          src="/img/logo.png"
          alt="Nombre del restaurante"
          width={150}
          height={150}
          priority
          style={{ display: "block", margin: "0 auto" }}
        />

        <h1 className="flex justify-center">Menú del restaurante</h1>

        <p className="flex justify-center pb-5">
          Bienvenido a nuestro restaurante. Descubrí nuestras opciones de menú
          cuidadosamente preparadas.
        </p>

        <MenuCategories categories={categories} />
      </div>
    </div>
  );
}
