"use client";
import React from "react";
import ContenedorDatos from "./ContenedorDatos";
import { useUserStore } from "@/app/store/Usuario";
import ActionButton from "@/app/Components/ActionButton";
import Link from "next/link";

function DatosGroup() {
  const user = useUserStore();

  return (
    <section className="w-full bg-white shadow-sm rounded-xl p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
        Datos Personales
      </h1>

      {/* Grid: sm=1 col, md+=2 cols */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Nombre */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-1">
            Nombre <span className="text-red-500">*</span>
          </label>
          <ContenedorDatos
            dato={user.user.name?.split(" ")[0] ?? "Sin datos"}
          />
        </div>

        {/* Primer apellido */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-1">
            Primer apellido <span className="text-red-500">*</span>
          </label>
          <ContenedorDatos
            dato={user.user.name?.split(" ")[1] ?? "Sin datos"}
          />
        </div>

        {/* Segundo apellido (opcional) */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-1">Segundo apellido</label>
          <ContenedorDatos
            dato={user.user.name?.split(" ")[2] ?? "Sin datos"}
          />
        </div>

        {/* Tipo de documento */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-1">
            Tipo de documento <span className="text-red-500">*</span>
          </label>
          <ContenedorDatos dato={user.user.document ?? "Sin datos"} />
        </div>

        {/* Celular */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-1">
            Celular <span className="text-red-500">*</span>
          </label>
          <ContenedorDatos dato={user.user.phone ?? "Sin datos"} />
        </div>

        {/* Correo electrónico */}
        <div className="flex flex-col">
          <label className="text-sm font-medium pb-1">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <ContenedorDatos dato={user.user.email ?? "Sin datos"} />
        </div>

        <div className="md:col-span-2 pt-2 flex justify-center">
          <Link href="/contacto">
            <ActionButton
              tipo="primary"
              title="Contáctenos"
              className="font-semibold"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DatosGroup;
