// components/TourDetails.tsx
import { useToursStore } from "@/app/store/ToursStore";
import Link from "next/link";
import React, { useState } from "react";
/* import { useNavigate } from "react-router-dom";  */ // Importa useNavigate de react-router-dom

const TourDetails = () => {
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("8:00");
  const [quantity, setQuantity] = useState(1);
  const { selectedTour } = useToursStore();

  return (
    <div className="rounded-xl shadow-sm px-6 py-5 bg-white max-w-full h-[544px]">
      <h2 className="text-2xl font-bold mb-2 oliva-o">{selectedTour?.title}</h2>
      <div className="flex items-center">
        <p className="text-gray-700 font-semibold text-lg">
          PEN {selectedTour?.priceOffer}
        </p>
        <p className="text-gray-500 line-through ml-2">
          PEN {selectedTour?.priceRegular}
        </p>
      </div>

      <div className="mt-3 border-t border-b border-gray-200 py-3">
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-medium">Duración:</span>{" "}
          {selectedTour?.duration}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-medium">Nivel de actividad:</span>{" "}
          {selectedTour?.activityLevel}
        </p>
        <p className="text-sm text-gray-700 mb-1">
          <span className="font-medium">Tamaño del grupo:</span>{" "}
          {selectedTour?.groupSize}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-medium">Edad Minima:</span>{" "}
          {selectedTour?.minAge ? selectedTour.minAge : "1 año"}
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
          {selectedTour?.schedule.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
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
      <Link
        href={"/pago/codigodepago"}
        className="mt-6 flex flex-row items-center justify-center w-full bg-oliva-c text-white py-2 rounded-md font-semibold bg-oliva-o-hover"
      >
        Reservar ahora
      </Link>
    </div>
  );
};

export default TourDetails;
