import Link from "next/link";

export const NavLinks = () => {

  return (
    <>
      <Link href="/carta" className="hover:text-gray-300 text-sm md:text-base">
        Carta
      </Link>
      <Link href="/contacto" className="hover:text-gray-300 text-sm md:text-base">
        Contacto
      </Link>
      <Link href="/noticias" className="hover:text-gray-300 text-sm md:text-base">
        Noticias
      </Link>
    </>
  );
};