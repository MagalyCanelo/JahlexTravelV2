import Image from "next/image";
import React from "react";

import cusco from "@/public/cusco.jpg";
import huacachina from "@/public/huacachina.jpg";
import ib from "@/public/islas_ballestas.jpg";
import rnp from "@/public/rnp.jpg";
import moto_scooter from "@/public/moto_scooter.jpg";
import lunahuana from "@/public/lunahuana.jpg";
import cañete from "@/public/cañete.jpg";

const DestinationsMasonry: React.FC = () => {
  return (
    <div className="bg-gray-50 p-4 lg:p-6">
      <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow my-4">
        <h2 className="text-md font-semibold">Galería</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:h-auto lg:grid-cols-7 lg:grid-rows-6 lg:h-[85vh] auto-rows-fr">
        {/* Item 1 */}
        <div className="group col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={huacachina}
            alt="Huacachina"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>
        <div className="group col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={huacachina}
            alt="Huacachina"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>
        <div className="group col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={huacachina}
            alt="Huacachina"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 2 */}
        <div className="group col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={moto_scooter}
            alt="Moto Scooter"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 3 */}
        <div className="group col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={ib}
            alt="IB"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 4 */}
        <div className="group col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={cusco}
            alt="Cusco"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 5 */}
        <div className="group col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={rnp}
            alt="RNP 2"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 6 */}
        <div className="group col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={ib}
            alt="IB Small"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 7 */}
        <div className="group col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={lunahuana}
            alt="Lunahuana"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 8 */}
        <div className="group col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={moto_scooter}
            alt="moto_scooter"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>

        {/* Item 9 */}
        <div className="group col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-1 lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={cañete}
            alt="IB Full"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>
        <div className="group col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3S lg:row-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src={cañete}
            alt="IB Full"
            className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
            width={1080}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default DestinationsMasonry;
