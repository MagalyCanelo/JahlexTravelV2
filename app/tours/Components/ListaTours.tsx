"use client";

import { TourCard } from "@/app/Components/TourCard";
import { BaseTour } from "@/app/interface/Tour";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import DestinoFilter from "./DestinoFilter";

function ListaTours(props: { listaTours: BaseTour[] }) {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-50 pt-2">
      <div className="flex lg:flex-row flex-col items-center gap-9 w-full max-w-[61rem] mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        {/* Filtro de búsqueda */}
        <div className="flex flex-col relative w-full sm:w-72 mb-2">
          <div className="flex flex-row items-center gap-2 text-oliva-o font-semibold text-lg text-gray-700 mb-2">
            <LuSearch />
            <span>Buscador</span>
          </div>
          <div className="flex items-center justify-between bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 hover:border-oliva-o transition">
            <input
              type="text"
              placeholder="Buscar tour"
              className="w-full outline-none border-none text-sm bg-transparent placeholder:text-gray-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-stone-500 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>

        {/* Otros filtros u opciones */}
        <div className="flex items-center gap-6 pb-2">
          <DestinoFilter />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-4 px-8 py-7 h-full">
        {(() => {
          const filteredTours = props.listaTours.filter((tour) =>
            tour.title.toLowerCase().includes(search.toLowerCase())
          );
          if (filteredTours.length === 0) {
            return (
              <div className="col-span-full text-center h-96 flex flex-col items-center justify-center text-stone-600">
                No se encontró el tour
              </div>
            );
          }
          return filteredTours.map((tour) => (
            <div className="flex justify-center" key={tour.id}>
              <TourCard tour={tour} isStatic={false}></TourCard>
            </div>
          ));
        })()}
      </div>
    </div>
  );
}

export default ListaTours;
