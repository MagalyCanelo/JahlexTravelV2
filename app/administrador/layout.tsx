"use client";
import Link from "next/link";
import { ReactNode, useState } from "react"; // Importar ReactNode
import NavLeft from "./components/NavLeft";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [activeMenu, setActiveMenu] = useState("Inicio"); // Estado para el menú activo

  // Función que actualiza el menú activo
  const handleMenuSelect = (menu: string) => {
    setActiveMenu(menu); // Cambia el estado de activeMenu según la opción seleccionada
  };

  // Renderiza los enlaces del header según el menú activo
  const renderHeaderLinks = () => {
    const linkClass =
      "flex items-center bg-lime-600 hover:bg-[#d7e99c] bg-oliva-o-hover text-black px-4 py-[6px] rounded-md transition font-semibold text-white"; // Clases para los enlaces

    switch (activeMenu) {
      case "Inicio":
        return (
          <div className="flex flex-row gap-4 justify-center">
            <Link href={"/administrador/"} className={linkClass}>
              Inicio
            </Link>
            <Link href={"/administrador/agregar"} className={linkClass}>
              Agregar sitio turístico
            </Link>
            <Link href={"/administrador/editar"} className={linkClass}>
              Editar sitio turístico
            </Link>
          </div>
        );
      case "Gestión de Tours":
        return (
          <div className="flex flex-row gap-4 justify-center">
            <Link
              href={"/administrador/gestiontours/lista"}
              className={linkClass}
            >
              Ver Tours
            </Link>
            <Link
              href={"/administrador/gestiontours/agregar"}
              className={linkClass}
            >
              Agregar Nuevo Tour
            </Link>
          </div>
        );
      case "Gestión de Reservas":
        return (
          <div className="flex flex-row gap-4 justify-center">
            <Link href={"/administrador/reservas"} className={linkClass}>
              Ver Reservas
            </Link>
            <Link href={"/administrador/reservas/nueva"} className={linkClass}>
              Crear Reserva
            </Link>
          </div>
        );
      case "Cancelaciones":
        return (
          <div className="flex flex-row gap-4 justify-center">
            <Link href={"/administrador/cancelaciones"} className={linkClass}>
              Ver Cancelaciones
            </Link>
          </div>
        );
      case "Ajustes":
        return (
          <div className="flex flex-row gap-4 justify-center">
            <Link href={"/administrador/ajustes"} className={linkClass}>
              Configuraciones
            </Link>
            <Link href={"/administrador/perfil"} className={linkClass}>
              Perfil
            </Link>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex ">
      {/* NavLeft */}
      <NavLeft activeMenu={activeMenu} onSelectMenu={handleMenuSelect} />

      {/* Contenido principal */}
      <main className="flex-1 p-6 ">
        <header className="bg-[#cbf199] border-b-4 border-[#588f10] flex flex-row rounded-lg rounded-b-none items-center justify-center p-4">
          {/* Aquí agregamos los enlaces con el diseño de botón secundario */}
          {renderHeaderLinks()}
        </header>

        {children}
      </main>
    </div>
  );
}
