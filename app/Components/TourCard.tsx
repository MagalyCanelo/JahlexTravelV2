"use client";
import React from "react";
import { BaseTour, TourCategory } from "../interface/Tour";
import { LuHeart, LuClock4, LuMapPin } from "react-icons/lu";
import ActionButton from "./ActionButton";
import ImageSlider from "./ImageSliderTours";
import { useRouter } from "next/navigation";
import { useToursStore } from "../store/ToursStore";

interface TourCardProps {
  tour: BaseTour;
}

export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const router = useRouter();
  const useTour = useToursStore();
  const handleReservarClick = () => {
    // Navegamos a la página de detalle del tour
    useTour.setSelectedTour(tour);
    router.push(`/detalles/${tour.id}`);
  };

  return (
    <div className="bg-[#fafafa] rounded-2xl border border-[#B7B7B7] p-4 w-full max-w-sm flex flex-col justify-between hover:shadow-lg transition">
      <div className="relative w-full h-60 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <ImageSlider images={tour.images} />

        <button className="absolute top-2 right-2 bg-white p-1 rounded-full z-10">
          <LuHeart className="h-5 w-5 oliva-o" />
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
