// components/TourDetails.tsx
import React, { useState } from "react";

const TourDetails = () => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("8:00");
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="rounded-xl shadow-lg px-6 py-5 bg-white max-w-full h-[544px]">
      <h2 className="text-2xl font-bold mb-2 oliva-o">Tour Islas Ballestas</h2>
      <div className="flex items-center">
        <p className="text-gray-700 font-semibold text-lg">PEN 45.00</p>
        <p className="text-gray-500 line-through ml-2">PEN 75.00</p>
      </div>

      <div className="mt-3 border-t border-b border-gray-200 py-3">
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-medium">Duración:</span> 2 Horas
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-medium">Nivel de actividad:</span> Bajo
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-medium">Tamaño del grupo:</span> Grande
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Edad Minima:</span> 1 año
        </p>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Horario
        </label>
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="w-full border border-gray-300 text-gray-600 rounded-md p-2"
        >
          <option value="8:00">8:00</option>
          <option value="10:00">10:00</option>
          <option value="12:00">12:00</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Fecha
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full border border-gray-300 text-gray-600 rounded-md p-2"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          Pasajeros
        </label>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-full border border-gray-300 text-gray-600  rounded-md p-2"
        />
      </div>
      <button className="mt-6 w-full bg-oliva-c text-white py-2 rounded-md font-semibold bg-oliva-o-hover">
        Reservar ahora
      </button>
    </div>
  );
};

export default TourDetails;
