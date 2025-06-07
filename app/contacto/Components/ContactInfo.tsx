import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import ContactRedes from "./ContactRedes";

const ContactInfo: React.FC = () => {
  return (
    <>
      {/* Redes sociales en la parte superior */}
      <div className="pb-4 lg:pb-6">
        <ContactRedes />
      </div>

      {/* Información de contacto */}
      <div className="bg-white shadow-sm rounded-xl p-6 divide-y divide-gray-300 text-sm md:text-base">
        <div className="flex items-center gap-4 pb-5">
          <FaMapMarkerAlt className="oliva-o text-xl min-w-[24px]" />
          <div className="text-gray-800 text-md">
            <a
              href="https://maps.app.goo.gl/2JLeS4fC7jA5urn96"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-semibold">Dirección</h3>
              <p>AA.HH. Alberto Tataje Muñoz - Paracas</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 py-5">
          <FaPhoneAlt className="oliva-o text-xl min-w-[24px]" />
          <div className="text-gray-800 text-md">
            <a href="tel:+51947435368" className="block">
              <h3 className="font-semibold">Celular</h3>
              <p>(+51) 947 435 368</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 py-5">
          <FaEnvelope className="oliva-o text-xl min-w-[24px]" />
          <div className="text-gray-800 text-md">
            <a href="mailto:jahlextravel@gmail.com" className="block">
              <h3 className="font-semibold">Correo electrónico</h3>
              <p>jahlextravel@gmail.com</p>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-5">
          <FaClock className="oliva-o text-xl min-w-[24px]" />
          <div className="text-gray-800 text-md">
            <a
              href="https://g.co/kgs/vjK5QjH"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="font-semibold">Horario de atención</h3>
              <p>
                <span className="font-medium">Lun - Dom:</span> 06:00 AM – 8:00
                PM
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
