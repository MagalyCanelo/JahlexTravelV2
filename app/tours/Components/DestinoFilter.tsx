import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { LuFilter, LuFilterX } from "react-icons/lu";

const locations = ["Paracas", "Ica", "Cañete", "Nazca", "Cusco"];
const tourTypes = ["Solo un Tour", "Full Day", "Tour Privado", "Tour Grupal"];

const DestinoFilter = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedTourType, setSelectedTourType] = useState<string>("");
  const [price, setPrice] = useState<number>(250);

  const [showLocationOptions, setShowLocationOptions] = useState(false);
  const [showTourOptions, setShowTourOptions] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);

  const priceRef = useRef<HTMLDivElement>(null);

  // Detectar click fuera del dropdown de precio
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        priceRef.current &&
        !priceRef.current.contains(event.target as Node)
      ) {
        setShowPriceOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resetFilters = () => {
    setSelectedLocation("");
    setSelectedTourType("");
    setPrice(250);
    setShowLocationOptions(false);
    setShowTourOptions(false);
    setShowPriceOptions(false);
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-oliva-o font-semibold text-lg text-gray-700">
          <LuFilter />
          <span>Filtros</span>
        </div>
        <button
          onClick={resetFilters}
          className="text-gray-600 hover:text-gray-800 transition"
          title="Limpiar filtros"
        >
          <LuFilterX size={20} />
        </button>
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap gap-4 text-gray-800">
        {/* Destino */}
        <Dropdown
          label="Destino"
          selected={selectedLocation}
          options={locations}
          onSelect={(value) => {
            setSelectedLocation(value);
            setShowLocationOptions(false);
          }}
          show={showLocationOptions}
          setShow={setShowLocationOptions}
        />

        {/* Tipo de tour */}
        <Dropdown
          label="Tipo de tour"
          selected={selectedTourType}
          options={tourTypes}
          onSelect={(value) => {
            setSelectedTourType(value);
            setShowTourOptions(false);
          }}
          show={showTourOptions}
          setShow={setShowTourOptions}
        />

        {/* Precio */}
        <div ref={priceRef} className="relative w-[150px]">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Precio máximo
          </label>
          <button
            onClick={() => {
              setShowPriceOptions(!showPriceOptions);
              setShowLocationOptions(false);
              setShowTourOptions(false);
            }}
            className="w-full flex items-center justify-between bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 hover:border-oliva-o"
          >
            <span>S/ {price}</span>
            <FaChevronDown className="text-xs" />
          </button>

          {showPriceOptions && (
            <div className="absolute z-30 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg px-4 py-3">
              <input
                type="range"
                min={50}
                max={1000}
                step={10}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:w-3
    [&::-webkit-slider-thumb]:h-3
    [&::-webkit-slider-thumb]:bg-[#65830B]
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:shadow
    [&::-moz-range-thumb]:w-3
    [&::-moz-range-thumb]:h-3
    [&::-moz-range-thumb]:bg-[#65830B]
    [&::-moz-range-thumb]:rounded-full"
              />
              <div className="text-center text-sm mt-2 text-oliva-o font-medium">
                S/ {price}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DestinoFilter;

// Dropdown personalizado
interface DropdownProps {
  label: string;
  selected: string;
  options: string[];
  onSelect: (value: string) => void;
  show: boolean;
  setShow: (show: boolean) => void;
}

const Dropdown = ({
  label,
  selected,
  options,
  onSelect,
  show,
  setShow,
}: DropdownProps) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <button
        onClick={() => setShow(!show)}
        className="w-[210px] flex items-center justify-between bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 hover:border-oliva-o"
        type="button"
      >
        <span>{selected || `Selecciona ${label.toLowerCase()}`}</span>
        <FaChevronDown className="text-xs" />
      </button>
      {show && (
        <div className="absolute z-30 mt-1 w-full bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => onSelect(opt)}
              className="w-full text-left px-3 py-2 text-sm hover:bg-stone-100"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
