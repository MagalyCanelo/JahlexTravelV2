"use client";
import React from "react";
import ContenedorDatos from "./ContenedorDatos";
import { useUserStore } from "@/app/store/Usuario";

function DatosGroup() {
  const user = useUserStore();
  return (
    <div className="border-stone-300 border rounded-lg col-span-full lg:col-span-4 p-4 flex flex-col gap-4">
      <h1 className="text-3xl">Datos Personales</h1>
      <h2>Nombre</h2>
      <ContenedorDatos
        dato={user.user.name?.split(" ")[0] ?? "Sin datos"}
      ></ContenedorDatos>
      <h2>Primer apellido</h2>
      <ContenedorDatos
        dato={user.user.name?.split(" ")[1] ?? "Sin datos"}
      ></ContenedorDatos>
      <h2>Segundo apellido</h2>
      <ContenedorDatos
        dato={user.user.name?.split(" ")[2] ?? "Sin datos"}
      ></ContenedorDatos>
      <h2>Tipo de documento</h2>
      <ContenedorDatos
        dato={user.user.document ?? "Sin datos"}
      ></ContenedorDatos>
      <h2>Celular</h2>
      <ContenedorDatos dato={user.user.phone ?? "Sin datos"}></ContenedorDatos>
      <h2>Correo electrónico</h2>
      <ContenedorDatos dato={user.user.email ?? "Sin datos"}></ContenedorDatos>
    </div>
  );
}

export default DatosGroup;
