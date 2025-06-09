"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { LuClock4, LuMapPin } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { BaseTour } from "../interface/Tour";
import { useToursStore } from "../store/ToursStore";
import ActionButton from "./ActionButton";
import ImageSlider from "./ImageSliderTours";

interface TourCardProps {
  tour: BaseTour;
  isStatic: boolean;
}

export const TourCard: React.FC<TourCardProps> = ({ tour, isStatic }) => {
  const router = useRouter();
  const useTour = useToursStore();
  const handleReservarClick = () => {
    // Navegamos a la página de detalle del tour
    useTour.setSelectedTour(tour);
    router.push(`/detalles/${tour.title}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 w-full max-w-sm flex flex-col justify-between hover:shadow-md transition border border-stone-200">
      <div className="relative w-full h-60 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <ImageSlider images={tour.images} isStatic={isStatic} />

        <button className="absolute top-2 right-2 bg-white p-1 rounded-full z-10">
          <FiHeart className="h-5 w-5 oliva-o" />
        </button>

        <span className="absolute bottom-2 left-2 bg-white oliva-o text-xs px-2 py-1 rounded-full z-10 font-medium">
          {tour.category}
        </span>
      </div>

      <h3 className="text-lg font-semibold mb-1 text-gray-800">{tour.title}</h3>

      <div className="flex flex-row justify-between py-2">
        <div className="text-sm text-gray-600 flex items-center gap-1">
          <LuMapPin className="h-4 w-4 oliva-o" />
          <span>{tour.location}</span>
        </div>

        <div className="text-sm text-gray-600 flex items-center gap-1 pb-1 mr-4">
          <LuClock4 className="h-4 w-4 oliva-o" />
          <span>{tour.duration}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-700">
          S/. {tour.priceRegular.toFixed(2)}{" "}
          <span className="text-sm font-normal">/persona</span>
        </span>
        <div className="font-semibold text-sm">
          <ActionButton
            onClick={handleReservarClick}
            tipo="primary"
            title="Reservar"
          />
        </div>
      </div>
    </div>
  );
};
