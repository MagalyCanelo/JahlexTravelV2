import React from "react";

function ContenedorDatos(props: { dato: string }) {
  return (
    <div className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-800">
      <p className="text-">{props.dato}</p>
    </div>
  );
}

export default ContenedorDatos;
