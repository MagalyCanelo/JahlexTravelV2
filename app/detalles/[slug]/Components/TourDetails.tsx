"use client";
import { BaseTour } from "@/app/interface/Tour";
import { useToursStore } from "@/app/store/ToursStore";
import { addTourToUserShoppingCar } from "@/service/FirebaseService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const TourDetails = (props?: BaseTour) => {
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [language, setLanguage] = useState("");
  const [error, setError] = useState("");
  const { selectedTour, setSelectedTour } = useToursStore();
  const [hour, setHour] = useState(selectedTour?.schedule[0]);
  const router = useRouter();

  const handleReservation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !hour || !language || quantity < 1) {
      e.preventDefault(); // Bloquea la navegación

      return;
    }

    setError("");
    if (!selectedTour || selectedTour.priceOffer === undefined) {
      setError("Faltan datos del tour.");
      return;
    }

    addTourToUserShoppingCar(
      selectedTour,
      quantity,
      "123456",
      selectedTour.priceOffer,
      date,
      hour
    );
    router.push("/pago/1");
  };

  useEffect(() => {
    props ? setSelectedTour(props) : null;
  }, []);

  return (
    <form
      onSubmit={(e) => {
        handleReservation(e);
      }}
      className="rounded-xl shadow-sm px-6 py-5 bg-white max-w-full min-h-[544px] xl:min-h-[655px]"
    >
      <h2 className="text-2xl xl:text-3xl font-bold mb-2 xl:mb-3 oliva-o">
        {selectedTour?.title}
      </h2>
      <div className="flex items-center mb-4">
        <p className="text-gray-700 font-semibold text-lg xl:text-xl">
          PEN {selectedTour?.priceOffer}
        </p>
        <p className="text-stone-500 line-through ml-2 xl:text-lg">
          PEN {selectedTour?.priceRegular}
        </p>
      </div>

      <div className="mt-3 border-t border-b border-gray-200 py-3 xl:py-5">
        <p className="text-sm xl:text-[16px] text-gray-700 mb-1 xl:mb-2">
          <span className="font-medium">Duración:</span>{" "}
          {selectedTour?.duration}
        </p>
        <p className="text-sm xl:text-[16px] text-gray-700 mb-1 xl:mb-2">
          <span className="font-medium">Nivel de actividad:</span>{" "}
          {selectedTour?.activityLevel}
        </p>
        <p className="text-sm xl:text-[16px] text-gray-700 mb-1 xl:mb-2">
          <span className="font-medium">Tamaño del grupo:</span>{" "}
          {selectedTour?.groupSize}
        </p>
        <p className="text-sm xl:text-[16px] text-gray-700">
          <span className="font-medium">Edad Minima:</span>{" "}
          {selectedTour?.minAge ? selectedTour.minAge : "1 año"}
        </p>
      </div>

      {/* Horario */}
      <div className="mt-4">
        <label className="block text-sm xl:text-[16px] font-semibold text-gray-700 mb-1 xl:mb-2">
          Horario
        </label>
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="w-full border border-gray-300 text-gray-600 rounded-md p-2 xl:h-12"
        >
          {selectedTour?.schedule.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Fecha */}
      <div className="mt-4">
        <label className="block text-sm xl:text-[16px] font-semibold text-gray-700 mb-1 xl:mb-3">
          Fecha
        </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`w-full border ${
            error && !date ? "border-red-500" : "border-gray-300"
          } text-gray-600 rounded-md p-2 xl:h-12`}
          min={new Date().toISOString().split("T")[0]}
          required
        />
        {error && !date && (
          <p className="text-red-500 mt-1 text-sm">
            Por favor selecciona una fecha.
          </p>
        )}
      </div>

      {/* Pasajeros + idioma */}
      <div className="mt-4 flex gap-4 items-end">
        {/* Pasajeros */}
        <div>
          <label className="block text-sm xl:text-[16px] font-semibold text-gray-700 mb-1 xl:mb-2">
            Pasajeros
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-28 h-10 xl:h-12 justify-between">
            <button
              type="button"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="text-xl text-gray-600"
            >
              −
            </button>
            <span className="text-gray-700">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-xl text-gray-600"
            >
              +
            </button>
          </div>
        </div>

        {/* Idioma */}
        <div className="w-full">
          <label className="block text-sm xl:text-[16px] font-semibold text-gray-700 mb-1 xl:mb-2">
            Idioma
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 text-gray-600 rounded-md h-10 p-2 xl:h-12"
          >
            <option value="">Selecciona un idioma</option>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </div>
      </div>

      {/* Mensaje de error */}
      {error && (
        <p className="text-red-500 mt-4 text-sm font-medium">{error}</p>
      )}

      {/* Botón de reserva */}
      <button
        type="submit"
        className="mt-6 xl:text-[18px] flex flex-row items-center justify-center w-full bg-oliva-c text-white py-2 rounded-md font-semibold bg-oliva-o-hover xl:h-12"
      >
        Reservar ahora
      </button>
    </form>
  );
};

export default TourDetails;
