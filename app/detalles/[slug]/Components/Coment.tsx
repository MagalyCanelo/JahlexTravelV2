import { TourReview } from "@/app/interface/Tour";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function Coment(props: TourReview) {
  return (
    <section className="border border-stone-100 shadow shadow-stone-500 rounded-lg text-black p-4">
      <div>
        {props.image !== "" ? (
          <span>
            {props.username
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase()}
          </span>
        ) : (
          <Image src={props.image} alt="User image" />
        )}
      </div>
      <div className="flex flex-row gap-2 text-yellow-500">
        {Array.from({ length: 5 }).map((v) => {
          return <FaStar />;
        })}
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
        consequuntur facilis ut pariatur, modi impedit nam eaque minima iure
        illo blanditiis iste quo unde incidunt. Ullam eos maxime optio dolore?
      </p>
    </section>
  );
}

export default Coment;
