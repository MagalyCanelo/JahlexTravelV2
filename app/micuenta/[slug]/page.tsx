import Header from "@/app/Components/Header";
import React from "react";
import ContenedorDatos from "./Components/ContenedorDatos";
import DatosGroup from "./Components/DatosGroup";

function page() {
  return (
    <div className="text-black">
      <Header />
      <div className="grid grid-cols-8 p-8">
        <DatosGroup />
      </div>
    </div>
  );
}

export default page;
