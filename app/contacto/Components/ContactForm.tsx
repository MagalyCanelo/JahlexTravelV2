import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-2 text-black">
        Envíanos un mensaje
      </h2>
      <p className="text-gray-800 mb-6">
        Si tienes alguna duda o consulta, llena el formulario y te responderemos
        lo antes posible.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Tu nombre *"
          className="text-gray-700 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <input
          type="email"
          placeholder="Tu correo electrónico *"
          className="text-gray-700 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          required
        />
        <textarea
          placeholder="Mensaje"
          className="text-gray-700 w-full border border-gray-300 rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
        ></textarea>
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
