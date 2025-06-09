"use client";
import { useState } from "react";
import { LuMap, LuClipboardList, LuSettings, LuLogOut } from "react-icons/lu";
import { HiXCircle } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/logo.png"; // Logo grande
import icon from "@/public/icono.png"; // Icono pequeño

export default function NavLeft() {
  const [isOpen, setIsOpen] = useState(false); // Estado que controla si el sidebar está abierto o cerrado

  return (
    <div
      className={`w-${isOpen ? "64" : "20"} h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between group hover:w-64 transition-all duration-300 ease-in-out`}
    >
      <div>
        <div className="p-6 overflow-hidden flex justify-center items-center">
          {/* Cambiar entre el logo y el icono */}
          <div className="w-full flex justify-center">
            {/* Alternar entre el logo y el icono */}
            <Image
              src={isOpen ? logo.src : icon.src} // Si está abierto, muestra el logo; si está cerrado, muestra el icono
              alt={isOpen ? "Logo de la empresa" : "Icono de la empresa"}
              className="transition-all duration-300 ease-in-out" // Transición suave
              height={isOpen ? 100 : 40} // Diferente tamaño para el logo y el icono
              width={isOpen ? 100 : 40} // Ajustar el tamaño
              onClick={() => setIsOpen(!isOpen)} // Permite alternar entre abierto y cerrado al hacer clic
            />
          </div>
        </div>

        {/* Menú principal */}
        <nav className="flex flex-col gap-2 px-4">
          <NavItem icon={<FaHome size={20} />} label="Inicio" active />
          <NavItem icon={<LuMap size={20} />} label="Gestión de Tours" />
          <NavItem
            icon={<LuClipboardList size={20} />}
            label="Gestión de Reservas"
          />
          <NavItem icon={<HiXCircle size={20} />} label="Cancelaciones" />
        </nav>
      </div>

      {/* Parte inferior */}
      <div className="px-4 pb-6 flex flex-col gap-2">
        <NavItem icon={<LuSettings size={20} />} label="Ajustes" />
        <NavItem icon={<LuLogOut size={20} />} label="Cerrar Sesión" danger />
      </div>
    </div>
  );
}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  danger?: boolean;
};

function NavItem({
  icon,
  label,
  active = false,
  danger = false,
}: NavItemProps) {
  return (
    <button
      className={`relative flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all gap-4
        ${active ? "bg-[#f4fde9] text-[#519100]" : "text-gray-600 hover:bg-gray-100"}
        ${danger ? "text-red-500 hover:bg-red-100" : ""} group`}
    >
      {/* Icono con color personalizado */}
      <span className="text-gray-700 group-hover:text-[#519100] transition-colors duration-300">
        {icon}
      </span>

      {/* Texto que se muestra al hacer hover */}
      <span className="absolute left-12 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-300">
        {label}
      </span>
    </button>
  );
}
