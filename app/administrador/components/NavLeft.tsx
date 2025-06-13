// components/NavLeft.tsx
import { LuMap, LuClipboardList, LuSettings, LuLogOut } from "react-icons/lu";
import { HiXCircle } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import logo from "@/public/logo.png";

type NavLeftProps = {
  activeMenu: string;
  onSelectMenu: (label: string) => void; // Callback para cambiar el menu activo
};

export default function NavLeft({ activeMenu, onSelectMenu }: NavLeftProps) {
  return (
    <div className="w-20 h-screen bg-white border-r border-gray-200 shadow-sm flex flex-col justify-between group hover:w-64 transition-all duration-300 ease-in-out">
      <div>
        <div className="p-6 overflow-hidden flex justify-center items-center">
          <Image
            src={logo.src}
            alt="Logo de la empresa"
            className="lg:w-50 w-60 xl:w-65"
            height={1080}
            width={1080}
          />
        </div>

        {/* Menú principal */}
        <nav className="flex flex-col gap-2 px-4">
          <NavItem
            icon={<FaHome size={20} />}
            label="Inicio"
            active={activeMenu === "Inicio"}
            onClick={() => onSelectMenu("Inicio")}
          />
          <NavItem
            icon={<LuMap size={20} />}
            label="Gestión de Tours"
            active={activeMenu === "Gestión de Tours"}
            onClick={() => onSelectMenu("Gestión de Tours")}
          />
          <NavItem
            icon={<LuClipboardList size={20} />}
            label="Gestión de Reservas"
            active={activeMenu === "Gestión de Reservas"}
            onClick={() => onSelectMenu("Gestión de Reservas")}
          />
          <NavItem
            icon={<HiXCircle size={20} />}
            label="Cancelaciones"
            active={activeMenu === "Cancelaciones"}
            onClick={() => onSelectMenu("Cancelaciones")}
          />
        </nav>
      </div>

      {/* Parte inferior */}
      <div className="px-4 pb-6 flex flex-col gap-2">
        <NavItem
          icon={<LuSettings size={20} />}
          label="Ajustes"
          active={activeMenu === "Ajustes"}
          onClick={() => onSelectMenu("Ajustes")}
        />
        <NavItem
          icon={<LuLogOut size={20} />}
          label="Cerrar Sesión"
          danger
          active={activeMenu === "Cerrar Sesión"}
          onClick={() => onSelectMenu("Cerrar Sesión")}
        />
      </div>
    </div>
  );
}

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  danger?: boolean;
  onClick: () => void;
};

function NavItem({
  icon,
  label,
  active = false,
  danger = false,
  onClick,
}: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all gap-4
        ${active ? "bg-[#f2ffe3] text-[#588f10]" : "text-gray-600 hover:bg-gray-100"} // Verde cuando activo, plomo por defecto
        ${danger ? "text-red-500 hover:bg-red-100" : "hover:bg-[#f2ffe3]"} // Solo rojo para el hover de "Cerrar Sesión"
        group`}
    >
      {/* Icono con color personalizado */}
      <span
        className={`transition-colors duration-300 ${active ? "text-[#588f10]" : "text-gray-600"} 
          ${danger ? "group-hover:text-red-500" : ""} // Rojo solo cuando el hover está activado
        `}
      >
        {icon}
      </span>

      {/* Texto que se muestra al hacer hover */}
      <span className="absolute left-12 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0 transition-all duration-300">
        {label}
      </span>
    </button>
  );
}
