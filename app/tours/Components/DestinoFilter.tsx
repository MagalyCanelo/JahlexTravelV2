import { useState } from "react";
import { LuFilter } from "react-icons/lu";

const locations = ["Paracas", "Ica", "Cañete", "Nazca", "Cusco"];

const DestinoFilter = () => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  return (
    <div className="relative inline-block">
      <button
        className="oliva-o font-semibold flex flex-row items-center w-43 cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className="mr-1">Destino:</span>
        {selectedLocation && (
          <span className="text-black text-sm font-normal ml-1">
            {selectedLocation}
          </span>
        )}
        <LuFilter className="oliva-o w-5.5 h-5.5 ml-auto" />
      </button>

      {showOptions && (
        <div className="absolute z-10 mt-2 bg-stone-100 rounded shadow-lg w-43 p-2">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => {
                setSelectedLocation(loc);
                setShowOptions(false); // cerrar el menú al seleccionar
              }}
              className="block w-full text-left text-sm px-2 py-1 hover:bg-stone-200 rounded"
            >
              {loc}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DestinoFilter;
