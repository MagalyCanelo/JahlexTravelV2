"use client";
import { TourCard } from "@/app/Components/TourCard";
import { infoTours } from "@/app/data/infoTours";
import { BaseTour } from "@/app/interface/Tour";
import React from "react";

function ListaTours() {
  const listaTours: BaseTour[] = infoTours;
  return (
    <div className="bg-stone-50">
      <div className="flex flex-col lg:flex-row justify-between items-center bg-stone-100 text-black p-4 w-fit mx-auto px-8 rounded-xl border-2 border-stone-200 gap-8">
        <label className="flex items-center gap-2 border p-2 rounded-xl border-oliva-c">
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
          <button className="oliva-c font-semibold flex flex-row gap-8 cursor-pointer items-center">
            <span>Precio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </button>
          <button className="oliva-c font-semibold flex flex-row gap-8 cursor-pointer items-center">
            <span>Destino</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 p-8">
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
