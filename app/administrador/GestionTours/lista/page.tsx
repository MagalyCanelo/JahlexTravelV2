"use client";
import { db } from "@/app/config/config";
import {
  ActivityLevel,
  BaseTour,
  GroupSize,
  TourCategory,
} from "@/app/interface/Tour";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

function ListaTours() {
  const [tours, setTours] = useState<BaseTour[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [tour, setTour] = useState<BaseTour>({
    id: 0,
    title: "",
    priceRegular: 0,
    priceOffer: 0,
    duration: "",
    activityLevel: ActivityLevel.BAJO,
    groupSize: GroupSize.MEDIANO,
    schedule: [],
    availableDates: [],
    images: [],
    description: "",
    itinerary: [],
    includes: [],
    notIncluded: [],
    recommendations: [],
    category: TourCategory.MARITIMO,
    location: "",
    rating: 0,
    minAge: 0,
  });

  useEffect(() => {
    const fetchTours = async () => {
      const tourRef = collection(db, "tours");
      const tourDocs = await getDocs(tourRef);
      const toursData: BaseTour[] = [];
      tourDocs.forEach((doc) => {
        toursData.push({ ...doc.data() } as BaseTour);
      });
      setTours(toursData);
    };

    fetchTours();
  }, []);

  const deleteTour = async (id: number) => {
    const tourRef = doc(db, "tours", id.toString()); // Usa el id
    await deleteDoc(tourRef).then(() => {
      const updatedTours = tours.filter((tour) => tour.id !== id); // Filtra por id
      setTours(updatedTours);
      alert("Tour eliminado");
    });
  };

  const confirmDeleteTour = (id: number) => {
    setTour(tours.find((tour) => tour.id === id)!);
    setOpenModal(true);
  };

  return (
    <div className="px-6 pt-5 pb-5.5 bg-white rounded-lg shadow-sm">
      {/* Modal Confirmation */}
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
              deleteTour(tour.id); // Usa el id aquí
              setOpenModal(false);
            }}
            className="text-md bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-medium transition"
          >
            Suspender
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
      <div className="overflow-x-auto rounded-2xl shadow-sm bg-white">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white rounded-2xl overflow-hidden">
          <thead className="bg-oliva-c text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-3 text-center min-w-[200px]">Tour</th>
              <th className="px-4 py-3 text-center min-w-[140px] sm:min-w-[175px]">
                Precio Regular
              </th>
              <th className="px-4 py-3 text-center min-w-[140px] sm:min-w-[175px]">
                Precio Oferta
              </th>
              <th className="px-4 py-3 text-center">Acciones</th>{" "}
              {/* Columna de Acciones */}
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr
                key={tour.id}
                className="border-t border-stone-200 hover:bg-stone-100 transition-colors"
              >
                <td className="px-4 py-3 text-center font-medium text-sm">
                  {tour.title}
                </td>
                <td className="px-4 py-3 text-center text-sm">
                  PEN {tour.priceRegular}
                </td>
                <td className="px-4 py-3 text-center text-sm">
                  PEN {tour.priceOffer}
                </td>
                <td className="px-4 py-3 text-center">
                  {/* Botones de acciones */}
                  <button
                    onClick={() =>
                      alert(
                        `Detalles del Tour: ${tour.title}\nPrecio Regular: PEN ${tour.priceRegular}\nPrecio Oferta: PEN ${tour.priceOffer}`
                      )
                    } // Mostrar el alert con la información
                    className="bg-oliva-c text-white font-medium px-4 py-2 rounded-full bg-oliva-o-hover mr-2 transition"
                  >
                    Ver Detalles
                  </button>
                  <button
                    onClick={() => alert(`Editando tour: ${tour.title}`)}
                    className="bg-oliva-c text-white font-medium px-4 py-2 rounded-full bg-oliva-o-hover mr-2 transition"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => confirmDeleteTour(tour.id)} // Pasamos el id
                    className="bg-red-500 text-white font-medium px-4 py-2 rounded-full hover:bg-red-600 transition"
                  >
                    Suspender
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaTours;
