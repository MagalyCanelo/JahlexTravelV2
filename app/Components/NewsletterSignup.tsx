"use client";

import React, { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleWhatsAppRedirect = () => {
    const mensaje = `Hola, me gustaría suscribirme al boletín con este correo: ${email}`;
    const numero = "51975341049"; // Reemplaza con tu número de WhatsApp, incluye el código de país (sin "+")

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="pt-10 pb-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Suscríbete a nuestro boletín
      </h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-8">
        Ahorra hasta un 50% en tours y viajes. Obtén acceso inmediato a precios
        más bajos.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-auto flex-1 px-5 py-3 rounded-md shadow-sm border text-gray-800 border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          onClick={handleWhatsAppRedirect}
          className="bg-oliva-c bg-oliva-o-hover text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        >
          Enviar por WhatsApp →
        </button>
      </div>
    </section>
  );
};

export default NewsletterSignup;
