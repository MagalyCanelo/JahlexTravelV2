"use client";
import { ShoppingCarTour } from "@/app/interface/Tour";
import { useShoppingCar, useToursStore } from "@/app/store/ToursStore";
import {
  cleanTourFromUserShoppingCar,
  getUserShoppingCar,
} from "@/service/FirebaseService";
import { useEffect, useState } from "react";

function ToursTable() {
  const [openModal, setOpenModal] = useState(false);
  const shoppingCar = useShoppingCar();
  const selectedTour = useToursStore();
  const [userShoppingCar, setUserShoppingCar] =
    useState<ShoppingCarTour | null>(null);

  useEffect(() => {
    getUserShoppingCar("123456").then((v) => {
      setUserShoppingCar(v);
      shoppingCar.setTours(v?.tours ?? []);
    });
  }, [shoppingCar.tours]);

  return (
    <div className="px-6 pt-2 pb-4 bg-stone-50">
      {/* Modal */}
      <dialog
        open={openModal}
        className="bg-white p-6 rounded-2xl shadow-lg border fixed top-0 bottom-0 border-stone-300 max-w-sm m-auto"
      >
        <h2 className="text-md font-semibold text-center text-gray-800">
          ¿Confirmar eliminación?
        </h2>
        <div className="mt-4 flex gap-4 justify-center">
          <button
            onClick={() => {
              if (selectedTour.selectedTour) {
                cleanTourFromUserShoppingCar(
                  selectedTour.selectedTour,
                  "123456"
                ).then((v) => {
                  shoppingCar.setTours(v);
                  setOpenModal(false);
                });
              }
            }}
            className="text-md bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium transition"
          >
            Remover
          </button>
          <button
            onClick={() => setOpenModal(false)}
            className="border-2 border-stone-400 text-gray-700 hover:border-gray-800 px-4 py-2 rounded-xl transition font-medium"
          >
            Cancelar
          </button>
        </div>
      </dialog>

      {/* Tabla */}
      <div className="overflow-x-auto rounded-2xl shadow-sm">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white rounded-2xl overflow-hidden">
          <thead className="bg-oliva-c text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-center">{/* Ícono */}</th>
              <th className="px-4 py-3 text-center min-w-[200px] sm:min-w-[250px]">
                Tour
              </th>{" "}
              {/* Aquí ampliamos la columna 'Tour' */}
              <th className="px-4 py-3 text-center min-w-[140px] sm:min-w-[175px]">
                Precio U.
              </th>
              <th className="px-4 py-3 text-center min-w-[140px] sm:min-w-[175px]">
                Fecha
              </th>
              <th className="px-4 py-3 text-center min-w-[140px] sm:min-w-[175px]">
                Hora
              </th>
              <th className="px-4 py-3 text-center min-w-[140px] sm:min-w-[175px]">
                Pasajeros
              </th>
            </tr>
          </thead>
          <tbody>
            {userShoppingCar?.tours.map((v, idx) => (
              <tr
                key={idx}
                className="border-t border-stone-200 hover:bg-stone-100 transition-colors"
              >
                {/* Ícono eliminar */}
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => {
                      selectedTour.setSelectedTour(v);
                      setOpenModal(true);
                    }}
                    className="text-red-500 hover:text-red-600 transition inline-flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>

                {/* Tour - alineado a la izquierda */}
                <td className="px-4 py-3 font-medium text-left text-sm">
                  {v.title}
                </td>

                {/* Todo lo demás centrado */}
                <td className="px-4 py-3 text-center text-sm">PEN {v.price}</td>
                <td className="px-4 py-3 text-center text-sm">
                  {new Date(v.date).toLocaleDateString("es-PE")}
                </td>
                <td className="px-4 py-3 text-center text-sm">{v.hour}</td>
                <td className="px-4 py-3 text-center text-sm">{v.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ToursTable;
