"use client";
import React, { useState } from "react";
import ActionButton from "@/app/Components/ActionButton";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsAppRedirect = () => {
    // Primero, construimos las partes del mensaje
    const mensajeParte1 = `Hola, mi nombre es ${name}.`; // Nombre del usuario
    const mensajeParte2 = `${message}`; // El mensaje del usuario

    // Número de WhatsApp
    const numero = "51975341049";

    // Creamos la URL de WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(
      mensajeParte1
    )}%0A${encodeURIComponent(mensajeParte2)}`;

    // Usamos location.href para redirigir al usuario a la URL de WhatsApp
    window.location.href = url;
  };

  return (
    <div className="bg-white shadow-sm rounded-xl p-6 pt-5 space-y-6">
      <h2 className="text-2xl font-semibold mb-3 text-gray-800">
        Envíanos un mensaje
      </h2>
      <p className="text-md text-gray-800 mb-3">
        Si tienes alguna duda o consulta, llena el formulario y te responderemos
        lo antes posible.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevenimos que se recargue la página
          handleWhatsAppRedirect(); // Enviamos el mensaje al WhatsApp
        }}
        className="space-y-5"
      >
        <div>
          <label className="block text-[15px] font-medium text-gray-700 pb-1 xl:text-[17px] xl:mb-1">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588f10] xl:text-lg"
            required
          />
        </div>

        <div>
          <label className="block text-[15px] font-medium text-gray-700 pb-1 xl:text-[17px] xl:mb-1">
            Mensaje
          </label>
          <textarea
            placeholder="Escribe tu mensaje aquí"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-gray-600 p-3 border border-gray-300 rounded-lg h-36 resize-none focus:outline-none focus:ring-2 focus:ring-[#588f10] xl:text-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-oliva-c bg-oliva-o-hover text-white py-2 rounded-lg font-semibold xl:text-[17px]"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
