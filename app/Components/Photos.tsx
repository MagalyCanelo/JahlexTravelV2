import React from "react";
import Image from "next/image";

import ib from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";
import huacachina from "@/public/huacachina.jpg";
import cusco from "@/public/cusco.jpg";

const destinations = [
  {
    title: "Paracas",
    location: "Perú",
    image: ib,
  },
  {
    title: "Ica",
    location: "Perú",
    image: rnp,
  },
  {
    title: "Nazca",
    location: "Perú",
    image: huacachina,
  },
  {
    title: "Cañete",
    location: "Perú",
    image: ib,
  },
  {
    title: "Cuzco",
    location: "Perú",
    image: cusco,
  },
];

const gridStyles = [
  "col-span-2 row-span-2", // Grande
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
];

const DestinationsMasonry: React.FC = () => {
  return (
    <div className="bg-gray-50 grid grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px] gap-4 p-4">
      {destinations.map((dest, index) => (
        <div
          key={index}
          className={`relative rounded-xl overflow-hidden ${
            gridStyles[index % gridStyles.length]
          }`}
        >
          <Image
            src={dest.image}
            alt={dest.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={index < 2}
          />
        </div>
      ))}
    </div>
  );
};

export default DestinationsMasonry;
