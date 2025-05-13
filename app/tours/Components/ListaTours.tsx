"use client";

import { LuFilter } from "react-icons/lu";
import { TourCard } from "@/app/Components/TourCard";
import { infoTours } from "@/app/data/infoTours";
import { BaseTour } from "@/app/interface/Tour";
import React from "react";
import PrecioFilter from "./PrecioFilter";
import DestinoFilter from "./DestinoFilter";

function ListaTours() {
  const listaTours: BaseTour[] = infoTours;
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-[#f6f6f6] text-black p-4 w-fit mx-auto px-8 rounded-xl border-2 border-stone-200 gap-8">
        <label className="flex items-center gap-2 border py-2 px-3 rounded-xl border-oliva-o bg-[#f8f8f8]">
          <input
            className="border-0 outline-0"
            type="text"
            placeholder="Buscar"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-stone-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </label>
        <div className="flex flex-row gap-4">
          <PrecioFilter />
          <DestinoFilter />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-4 p-8">
        {listaTours.map((tour) => (
          <div className="flex justify-center" key={tour.id}>
            <TourCard tour={tour}></TourCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaTours;
