import React from "react";
import TourImage from "./TourImage";
import TourDetails from "./TourDetails";

function Tour() {
  return (
    <div className="bg-gray-50 flex flex-col lg:flex-row gap-6 px-6 py-3">
      {/* Imagen a la izquierda, 3/5 del ancho */}
      <div className="w-full lg:w-3/5">
        <TourImage />
      </div>

      {/* Detalles a la derecha, 2/5 del ancho */}
      <div className="w-full lg:w-2/5">
        <TourDetails />
      </div>
    </div>
  );
}

export default Tour;
