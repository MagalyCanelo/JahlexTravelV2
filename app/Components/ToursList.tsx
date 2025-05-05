"use client";
import React from "react";
import { BaseTour } from "../interface/Tour";
import { TourCard } from "./TourCard";
import ActionButton from "./ActionButton";

interface ToursListProps {
  tours: BaseTour[];
}

export const ToursList: React.FC<ToursListProps> = ({ tours }) => {
  return (
    <section className="bg-gray-50 p-4">
      <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow my-4">
        <h2 className="text-md font-semibold">Tours</h2>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
      <div className="mt-6 text-center font-semibold">
        <ActionButton onClick={() => {}} tipo="primary" title="Mostrar Todo" />
      </div>
    </section>
  );
};
