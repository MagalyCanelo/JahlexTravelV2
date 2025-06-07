import React, { useState } from "react";

interface HelpCardProps {
  tourTitle: string;
}

const HelpCard: React.FC<HelpCardProps> = ({ tourTitle }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");

  const handleWhatsAppRedirect = () => {
    const mensaje = `Hola, mi nombre es ${name}. Estoy interesado/a en "${tourTitle}" y tengo la siguiente duda: ${question}`;
    const numero = "51975341049"; // Número de WhatsApp

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  // Manejar la visualización del formulario
  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <h3 className="text-gray-700 font-semibold text-md xl:text-[17px] mb-3 text-center">
        ¿Necesita ayuda con esta reserva?
      </h3>

      {!showForm ? (
        <button
          className="w-full bg-oliva-c text-white py-2 rounded-lg font-semibold bg-oliva-o-hover xl:text-[17px]"
          onClick={handleButtonClick}
        >
          Contáctenos
        </button>
      ) : (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleWhatsAppRedirect();
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 pb-1 xl:text-[16px] xl:mb-1">
                Nombre
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full text-gray-600 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588f10]"
                placeholder="Ingresa tu nombre"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 pb-1 xl:text-[16px] xl:mb-1">
                ¿Cuál es tu duda?
              </label>
              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full text-gray-600 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#588f10]"
                placeholder="Describe tu duda"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-oliva-c bg-oliva-o-hover text-white py-2 rounded-lg font-semibold xl:text-[17px]"
            >
              Enviar al WhatsApp
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HelpCard;
