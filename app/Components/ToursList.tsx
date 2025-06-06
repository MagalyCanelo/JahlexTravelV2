"use client";
import React from "react";
import { BaseTour } from "../interface/Tour";
import ActionButton from "./ActionButton";
import { TourCard } from "./TourCard";

interface ToursListProps {
  tours: BaseTour[];
}

export const ToursList: React.FC<ToursListProps> = ({ tours }) => {
  return (
    <section className="bg-stone-50 p-4 lg:p-6 pb-8 lg:pb-6 lg:pt-4">
      <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow mb-4">
        <h2 className="text-md font-semibold">Tours</h2>
      </div>
      <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} isStatic={false} />
        ))}
      </div>
      <div className="mt-8 text-center font-semibold">
        <ActionButton onClick={() => {}} tipo="primary" title="Mostrar Todo" />
      </div>
    </section>
  );
};
