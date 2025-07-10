"use client";
import React, { useState } from "react";
import ContenedorDatos from "./ContenedorDatos";
import { useUserStore } from "@/app/store/Usuario";
import ActionButton from "@/app/Components/ActionButton";
import Link from "next/link";
import ChangePassword from "./ChangePassword";

function DatosGroup() {
  const user = useUserStore();
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <div className="w-full">
      {/* Franja superior verde oliva */}
      <div className="w-full bg-oliva-c py-2 mb-4 rounded-xl shadow-md">
        <h1 className="text-center text-white tracking-wide text-3xl font-bold hero-banner-title">
          Datos Personales
        </h1>
      </div>

      {/* Contenedor de datos */}
      <section className="w-full bg-white shadow-sm rounded-xl p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
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

          {/* Segundo apellido */}
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

          {/* Botones */}
          <div className="md:col-span-2 pt-2 flex justify-start gap-4">
            <Link href="/.">
              <ActionButton
                tipo="primary"
                title="Guardar Cambios"
                className="font-semibold"
              />
            </Link>
            <ActionButton
              tipo="secondary"
              title={showChangePassword ? "Ocultar Cambio de Contraseña" : "Cambiar Contraseña"}
              onClick={() => setShowChangePassword(!showChangePassword)}
              className="font-semibold"
            />
          </div>
        </div>
      </section>

      {/* Sección de cambio de contraseña */}
      {showChangePassword && (
        <div className="mt-8">
          <ChangePassword />
        </div>
      )}
    </div>
  );
}

export default DatosGroup;
