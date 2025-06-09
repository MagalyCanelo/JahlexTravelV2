import Image from "next/image";
import React from "react";

import moto_scooter from "@/public/Galeria/moto_scooter.jpg";
import lunahuana from "@/public/Galeria/lunahuana.jpg";
import roja_per from "@/public/Galeria/roja_per.jpg";
import tubular from "@/public/Galeria/tubular.jpg";
import trekking from "@/public/Galeria/trekking.jpg";
import bicicleta from "@/public/Galeria/bicicleta.jpg";
import pasajeros_avioneta from "@/public/Galeria/pasajeros_avioneta.jpg";
import pasajeros_lancha from "@/public/Galeria/pasajeros_lancha.jpg";
import minibuggy from "@/public/Galeria/minibuggy.jpg";
import brujas from "@/public/Galeria/brujas.jpg";
import sandboarding from "@/public/Galeria/sandboarding.jpg";
import cuatrimoto from "@/public/Galeria/cuatrimoto.jpg";

const DestinationsMasonry: React.FC = () => {
  return (
    <div className="bg-stone-50 p-4 lg:p-6 lg:pt-2">
      <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow my-4">
        <h2 className="text-md font-semibold">Galería</h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-[16] gap-4 md:grid-cols-4 md:h-96 lg:grid-cols-7 lg:grid-rows-6 lg:h-[85vh]">
        {/* Item 1 */}
        <div className="group col-span-2 row-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={bicicleta}
            alt="Bicicleta en RNP"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>
        <div className="group col-span-1 row-span-1  sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={pasajeros_avioneta}
            alt="Pasajeros en avioneta en Nazca"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>
        <div className="group col-span-1 row-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={trekking}
            alt="Trekking en RNP"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 2 */}
        <div className="group col-span-2 row-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={moto_scooter}
            alt="Moto Scooter"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 3 */}
        <div className="group col-span-1  md:col-span-2 lg:col-span-2 lg:row-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={minibuggy}
            alt="Trekking en RNP"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 4 */}
        <div className="group col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={pasajeros_lancha}
            alt="Pasajeros en lancha en IB"
            className="w-full h-full object-cover [object-position:center_100%]  transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 5 */}
        <div className="group col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={tubular}
            alt="Tubulares"
            className="w-full h-full object-cover [object-position:center_90%] transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 6 */}
        <div className="group col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={sandboarding}
            alt="Sandboarding en Huacachina"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 7 */}
        <div className="group col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={lunahuana}
            alt="Lunahuana en kayak"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 8 */}
        <div className="group col-span-1 row-span-1  md:col-span-1 lg:col-span-1 lg:row-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={roja_per}
            alt="Personas en Roja"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 9 */}
        <div className="group col-span-1 row-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={cuatrimoto}
            alt="Cuatrimoto en RNP"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            style={{ objectPosition: "70% center" }}
            width={1080}
            height={1080}
          />
        </div>
        <div className="group col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-3S lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={brujas}
            alt="IB Full"
            className="w-full h-full object-cover [object-position:center_20%] transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationsMasonry;
