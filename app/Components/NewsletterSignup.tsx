"use client";

import React, { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [tour, setTour] = useState("");

  // Redirige a WhatsApp con el mensaje
  const handleWhatsAppRedirect = () => {
    const mensaje = `Hola, me gustaría recibir más información sobre el tour: ${tour}.`;
    const numero = "51947435368";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="pt-9 pb-15 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
        ¿Tienes dudas o necesitas más detalles?
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Si tienes alguna pregunta o deseas más información sobre nuestros tours,
        envíanos el tour que te interesa.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        {/* Campo para el tour */}
        <input
          type="text"
          placeholder="Tour de tu interés"
          value={tour}
          onChange={(e) => setTour(e.target.value)}
          className="w-full sm:w-auto flex-1 px-5 py-3 rounded-md shadow-sm border bg-white text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#65830B]"
        />

        {/* Botón para enviar por WhatsApp */}
        <button
          onClick={handleWhatsAppRedirect}
          className="bg-oliva-c bg-oliva-o-hover text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          Enviar por WhatsApp
        </button>
      </div>
    </section>
  );
};

export default NewsletterSignup;
