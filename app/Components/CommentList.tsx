"use client";

import infoUsers from "@/app/data/InfoUsers";
import ActionButton from "./ActionButton";
import CommentCard from "./CommentCard";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { FaTripadvisor } from "react-icons/fa";

interface CommentSliderProps {
  users?: {
    name: { first: string; last: string };
    picture: { large: string };
    location: string;
    comment: string;
    rating: number;
  }[];
}

const CommentSlider: React.FC<CommentSliderProps> = ({}) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
    created(s) {
      setInterval(() => {
        s.next();
      }, 2000);
    },
  });

  return (
    <div className="w-full px-4 lg:px-6 py-4 bg-stone-50">
      {/* Título */}
      <div className="text-left mb-4">
        <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow">
          <h2 className="text-md font-semibold">Comentarios</h2>
        </div>
      </div>
      <div ref={sliderRef} className="keen-slider">
        {infoUsers.map((user, idx) => (
          <div key={idx} className="keen-slider__slide">
            <CommentCard
              user={user}
              comentario={user.comment}
              ubicacion={user.location}
            />
          </div>
        ))}
      </div>
      {/* Botón */}
      <div className="pb-8 mt-2 text-sm xl:text-md text-gray-700 border-b border-gray-200 pt-4 flex flex-col items-center text-center">
        <div className="flex flex-col items-center gap-2">
          <FaTripadvisor className="oliva-o text-4xl xl:text-5xl" />
          <span>
            Presentes en TripAdvisor y recomendados por quienes nos eligieron.
          </span>
        </div>
        <div className="mt-4 text-center font-semibold">
          <ActionButton
            onClick={() => {}}
            tipo="primary"
            title="Mostrar Todo"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentSlider;
