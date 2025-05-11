import { useState } from "react";
import { LuFilter } from "react-icons/lu";

const PrecioFilter = () => {
  const [showSlider, setShowSlider] = useState<boolean>(false);
  const [maxPrecio, setMaxPrecio] = useState<number>(1000);

  return (
    <div className="relative inline-block">
      <button
        className="oliva-o font-semibold flex flex-row cursor-pointer items-center w-47"
        onClick={() => setShowSlider(!showSlider)}
      >
        <span className="mr-1">Precio:</span>
        <span className="text-black text-sm font-normal">
          ${maxPrecio}
        </span>{" "}
        {/* Precio */}
        <LuFilter className="oliva-o w-5.5 h-5.5 ml-auto" />
      </button>

      {showSlider && (
        <div className="absolute z-10 mt-2 bg-stone-100 rounded shadow-lg w-47 p-3">
          <label className="block text-sm">
            <strong>Precio máximo:</strong> ${maxPrecio}
          </label>
          <input
            type="range"
            min="0"
            max="2000"
            value={maxPrecio}
            onChange={(e) => setMaxPrecio(Number(e.target.value))}
            className="w-full h-1 bg-gray-300 rounded appearance-none cursor-pointer
               [&::-webkit-slider-thumb]:appearance-none
               [&::-webkit-slider-thumb]:h-3
               [&::-webkit-slider-thumb]:w-3
               [&::-webkit-slider-thumb]:rounded-full
               [&::-webkit-slider-thumb]:bg-gray-500
               [&::-webkit-slider-thumb]:shadow
               [&::-webkit-slider-thumb]:mt-[-1px]
               [&::-moz-range-thumb]:h-3
               [&::-moz-range-thumb]:w-3
               [&::-moz-range-thumb]:rounded-full
               [&::-moz-range-thumb]:bg-gray-700"
          />
        </div>
      )}
    </div>
  );
};

export default PrecioFilter;
