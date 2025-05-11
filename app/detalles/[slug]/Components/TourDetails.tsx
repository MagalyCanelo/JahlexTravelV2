// components/TourDetails.tsx
import React, { useState } from "react";

const TourDetails = () => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("8:00");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="rounded-xl shadow-lg p-6 bg-white max-w-full h-[517px]">
      <h2 className="text-xl font-semibold mb-2">Tour Islas Ballestas</h2>
      <p className="text-green-600 font-bold text-lg">PEN 45.00</p>
      <p className="text-gray-500 line-through">PEN 75.00</p>

      <div className="mt-4">
        <p className="text-sm text-gray-700">Duración: 2 Horas</p>
        <p className="text-sm text-gray-700">Nivel de actividad: Bajo</p>
        <p className="text-sm text-gray-700">Tamaño del grupo: Grande</p>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Horario
        </label>
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        >
          <option value="8:00">8:00</option>
          <option value="10:00">10:00</option>
          <option value="12:00">12:00</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Fecha
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Pasajeros
        </label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>

      <button className="mt-6 w-full bg-lime-600 text-white py-2 rounded-md font-semibold hover:bg-lime-700">
        Reservar ahora
      </button>
    </div>
  );
};

export default TourDetails;
