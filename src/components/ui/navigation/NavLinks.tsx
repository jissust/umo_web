import Link from "next/link";

export const NavLinks = () => {

  return (
    <>
      <Link href="/carta" className="hover:text-gray-300">
        Carta
      </Link>
      <Link href="/contacto" className="hover:text-gray-300">
        Contacto
      </Link>
      <Link href="/noticias" className="hover:text-gray-300">
        Noticias
      </Link>
    </>
  );
};