import React from "react";

function ContenedorDatos(props: { dato: string }) {
  return (
    <div className="border-b-1 w-full border-b-stone-400">
      <p className="text-">{props.dato}</p>
    </div>
  );
}

export default ContenedorDatos;
