import { Map } from "@/components/blocks/map/Map";
import { FaInstagram, FaPhone, FaWhatsapp, FaMailBulk } from "react-icons/fa";

export default function Contacto() {
  return (
    <div className="min-h-screen w-full pt-28 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold pb-2">Contacto</h1>
        <p className="text-sm md:text-base pb-5">
          Podés encontrarnos o comunicarte con nosotros a través de los
          siguientes medios.
        </p>
        <div className="flex items-center text-sm md:text-base pb-1">
          <FaWhatsapp />{" "}
          <a
            href="https://wa.me/34641467880"
            target="_blank"
            rel="noopener noreferrer"
          >
            +34 641 46 78 80
          </a>
        </div>
        <div className="flex items-center text-sm md:text-base pb-1">
          <FaPhone />
          <a href="tel:+34871612605">+34 871 612 605</a>
        </div>
        <div className="flex items-center gap-2 text-sm md:text-base pb-1">
          <FaInstagram />
          <a
            href="https://www.instagram.com/umo.calador26"
            target="_blank"
            rel="noopener noreferrer"
          >
            @umo.calador26
          </a>
        </div>
        <div className="flex items-center gap-2 pb-10 text-sm md:text-base pb-1">
          <FaMailBulk />
          <a href="mailto:umo.calador@gmail.com">umo.calador@gmail.com</a>
        </div>
        <Map />
      </div>
    </div>
  );
}
