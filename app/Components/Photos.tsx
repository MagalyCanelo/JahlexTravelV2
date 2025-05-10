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
    <div className="bg-gray-50 p-8">
      <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow my-4">
        <h2 className="text-md font-semibold">Galería</h2>
      </div>
      <div className="grid grid-cols-7 grid-rows-7 gap-4 h-screen">
        <div className="col-span-4 row-span-2 bg-white shadow-lg rounded-lg ">
          <Image
            src={huacachina}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-1 row-span-2 bg-white shadow-lg rounded-lg">
          <Image
            src={rnp}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 row-span-3 bg-white shadow-lg rounded-lg">
          <Image
            src={ib}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>

        <div className="col-span-2 row-span-2 bg-white shadow-lg rounded-lg">
          <Image
            src={cusco}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 row-span-2 bg-white shadow-lg rounded-lg">
          <Image
            src={rnp}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-1 row-span-1 bg-white shadow-lg rounded-lg">
          <Image
            src={ib}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>

        <div className="col-span-2 row-span-3 bg-white shadow-lg rounded-lg">
          <Image
            src={cusco}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-1 row-span-3 bg-white shadow-lg rounded-lg">
          <Image
            src={rnp}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-4 row-span-2 bg-white shadow-lg rounded-lg">
          <Image
            src={ib}
            alt="Paracas"
            className="w-full h-full object-cover rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationsMasonry;
