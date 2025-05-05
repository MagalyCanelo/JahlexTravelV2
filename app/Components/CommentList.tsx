"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import CommentCard from "./CommentCard"; // Asegúrate de ajustar la ruta si está en otro lugar
import ActionButton from "./ActionButton";

interface User {
  name: { first: string; last: string };
  picture: { large: string };
  rating: number;
}

interface CommentListProps {
  users: User[];
}

const CommentList: React.FC<CommentListProps> = ({ users }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
  });

  return (
    <div className="bg-gray-50 flex flex-col w-full items-center py-6">
      <div className="w-full px-6">
        {/* Título */}
        <div className="text-left mb-4">
          <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow">
            <h2 className="text-md font-semibold">Comentarios</h2>
          </div>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider w-full">
          {users.map((user, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <CommentCard
                imagen={user.picture.large}
                nombre={`${user.name.first} ${user.name.last}`}
                comentario="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, provident deleniti quisquam."
                rating={user.rating}
              />
            </div>
          ))}
        </div>
        {/* Boton */}
        <div className="mt-6 text-center font-semibold">
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

export default CommentList;
