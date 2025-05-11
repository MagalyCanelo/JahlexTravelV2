import React, { useState } from "react";
import HelpCard from "./HelpCard";
import WhyUsCard from "./WhyUsCard";

const TourTabsSection = () => {
  const [activeTab, setActiveTab] = useState("itinerary");

  const renderContent = () => {
    switch (activeTab) {
      case "itinerary":
        return <p>Aquí va el contenido del itinerario...</p>;
      case "includes":
        return <p>Aquí va el contenido de lo que incluye...</p>;
      case "import":
        return <p>Aquí va la informacion adicional del tour...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 flex flex-col lg:flex-row gap-6">
      {/* Tabs a la izquierda */}
      <div className="w-full">
        <div className="mb-4 flex justify-center items-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "itinerary"
                ? "bg-oliva-c text-white"
                : "bg-[#E6F0AC] text-gray-800"
            } hover:bg-[#d7e99c]`}
            onClick={() => setActiveTab("itinerary")}
          >
            Itinerario
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "includes"
                ? "bg-oliva-c text-white"
                : "bg-[#E6F0AC] text-gray-800"
            } hover:bg-[#d7e99c]`}
            onClick={() => setActiveTab("includes")}
          >
            Descripción
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "import"
                ? "bg-oliva-c text-white"
                : "bg-[#E6F0AC] text-gray-800"
            } hover:bg-[#d7e99c]`}
            onClick={() => setActiveTab("import")}
          >
            Importante
          </button>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm text-gray-700">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default TourTabsSection;
