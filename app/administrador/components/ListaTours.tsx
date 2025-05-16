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

  //delete the tour
  const deleteTour = async (title: string) => {
    const tourRef = doc(db, "tours", title.toString());
    await deleteDoc(tourRef).then(() => {
      const updatedTours = tours.filter((tour) => tour.title !== title);
      setTours(updatedTours);
      alert("Tour eliminado");
    });
  };

  //render as a table
  return (
    <div className="row-span-8 col-span-10 bg-white rounded-lg shadow p-4">
      <dialog className="m-auto bg-white rounded-lg shadow-lg">
        <form method="dialog" className="p-4">
          <h2 className="text-xl font-bold">Ver detalle</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div>
              <h3 className="font-semibold">Título:</h3>
              <p>{tour.title}</p>
            </div>
            <div>
              <h3 className="font-semibold">Duración en minutos:</h3>
              <p>{tour.duration}</p>
            </div>
            <div>
              <h3 className="font-semibold">Nivel de Actividad:</h3>
              <p>{tour.activityLevel}</p>
            </div>
            <div>
              <h3 className="font-semibold">Tamaño de Grupo:</h3>
              <p>{tour.groupSize}</p>
            </div>
            <div>
              <h3 className="font-semibold">Horarios:</h3>
              <p>{tour.schedule.join(", ")}</p>
            </div>
            <div>
              <h3 className="font-semibold">Ubicación:</h3>
              <p>{tour.location}</p>
            </div>
            <div>
              <h3 className="font-semibold">Categoría:</h3>
              <p>{tour.category}</p>
            </div>
            <div>
              <h3 className="font-semibold">Calificación:</h3>
              <p>{tour.rating} / 5</p>
            </div>
            <div>
              <h3 className="font-semibold">Precio Regular:</h3>
              <p>{tour.priceRegular}</p>
            </div>
            <div>
              <h3 className="font-semibold">Precio Oferta:</h3>
              <p>{tour.priceOffer}</p>
            </div>
            <div>
              <h3 className="font-semibold">Incluye:</h3>
              <p>{tour.includes}</p>
            </div>
            <div>
              <h3 className="font-semibold">NO Incluye:</h3>
              <p>{tour.notIncluded}</p>
            </div>
            <div>
              <h3 className="font-semibold">Intinerario:</h3>
              <ol>
                {tour.itinerary.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-oliva-c text-white px-5 py-2 rounded-full bg-oliva-o-hover transition"
            >
              Cerrar
            </button>
          </div>
        </form>
      </dialog>
      <h2 className="text-xl font-bold">Lista de Tours</h2>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left px-4 py-2">Nombre</th>
            <th className="text-left px-4 py-2">Descripción</th>
            <th className="text-left px-4 py-2">Precio Regular</th>
            <th className="text-left px-4 py-2">Precio Oferta</th>
            <th className="text-left px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td className="border-y px-4 py-2">{tour.title}</td>
              <td className="border-y px-4 py-2">{tour.description}</td>
              <td className="border-y px-4 py-2">{tour.priceRegular}</td>
              <td className="border-y px-4 py-2">{tour.priceOffer}</td>
              <td className="border-y px-4 py-2 ">
                <button
                  className="bg-oliva-c mr-2 text-white px-5 py-2 rounded-full bg-oliva-o-hover transition"
                  onClick={() => {
                    const dialog = document.querySelector("dialog");
                    if (dialog) {
                      dialog.showModal();
                      setTour(tour);
                    }
                  }}
                >
                  Ver detalle
                </button>
                <button
                  className="bg-[#E6F0AC] text-black px-5 py-2 rounded-full hover:bg-[#d7e99c] transition"
                  onClick={() => {
                    if (
                      confirm("¿Está seguro de que desea eliminar este tour?")
                    ) {
                      deleteTour(tour.title);
                    }
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaTours;
