import { TourReview } from "@/app/interface/Tour";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function Coment(props: TourReview) {
  return (
    <section className="border w-full border-stone-100 shadow shadow-stone-200 rounded-lg text-black p-4 gap-2 flex flex-col">
      <div className="flex flex-row gap-2 text-yellow-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            size={20}
            className={
              index < props.qualification ? "text-yellow-500" : "text-gray-300"
            }
          />
        ))}
      </div>
      <p>{props.opinion}</p>
      <div className="w-full border-t-1 pt-2 border-stone-300 flex flex-row gap-2 items-center">
        <Image
          src={props.image}
          alt="User image"
          width={1080}
          height={1080}
          className="h-8 w-8 rounded-full"
        />
        <span>{props.username}</span>
      </div>
    </section>
  );
}

export default Coment;
