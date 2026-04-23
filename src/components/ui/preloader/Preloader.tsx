"use client";

import { useLoading } from "@/context/LoadingContext";
import Image from "next/image";

export const Preloader = () => {
  const { isLoading } = useLoading();

  return (
    <div
      className={`
        fixed inset-0 z-[9999] flex items-center justify-center
        bg-black text-white text-xl
        transition-opacity duration-700 ease-in-out
        ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="flex flex-col items-center animate-fadeIn">
        
        {/* LOGO */}
        <div className="relative w-32 h-32 animate-pulseSlow">
          <Image
            src="/img/logo_blanco_554x718.png" // 👉 poné tu logo acá
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* TEXTO */}
        <p className="mt-6 text-white text-sm tracking-widest animate-fadeIn delay-300">
          CARGANDO...
        </p>
      </div>
    </div>
  );
};