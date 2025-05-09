import React from "react";
import TurForm from "./components/TurForm";
import ListaTours from "./components/ListaTours";

function page() {
  return (
    <div className="bg-white w-full h-screen p-4 grid grid-rows-12 grid-cols-12 text-black">
      <span className="row-span-2 col-span-12"></span>
      <span className="row-span-2 col-span-1"></span>
      {/* <div className="row-span-8 col-span-10 bg-white rounded-lg shadow p-4">
          <h2 className="text-xl font-bold">Agregar Sitio Turístico</h2>
          <TurForm />
        </div> */}
        <ListaTours/>
    </div>
  );
}

export default page;
