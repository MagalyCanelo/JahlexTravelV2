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
      <div className="bg-white shadow-md rounded-xl p-6 divide-y divide-gray-300 text-sm md:text-base">
        <div className="flex items-center gap-4 pb-5">
          <FaMapMarkerAlt className="text-orange-500 text-xl min-w-[24px]" />
          <div className="text-gray-800">
            <h3 className="font-semibold">Dirección</h3>
            <p>184 Mayfield St. Hopewell Junction, NY 12533</p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-5">
          <FaPhoneAlt className="text-orange-500 text-xl min-w-[24px]" />
          <div className="text-gray-800">
            <h3 className="font-semibold">Teléfonos</h3>
            <p>+ 844 1800 – 333 55</p>
            <p>+ 844 1755 – 444 11</p>
          </div>
        </div>

        <div className="flex items-center gap-4 py-5">
          <FaEnvelope className="text-orange-500 text-xl min-w-[24px]" />
          <div className="text-gray-800">
            <h3 className="font-semibold">Correo electrónico</h3>
            <p className="text-orange-500">contact@example.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-5">
          <FaClock className="text-orange-500 text-xl min-w-[24px]" />
          <div className="text-gray-800">
            <h3 className="font-semibold">Horario de atención</h3>
            <p>Lun - Sáb: 10:00 AM – 8:00 PM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
