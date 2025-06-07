"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarMenu = (props: { isOpen: boolean; onClose: () => void }) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        props.isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={props.onClose}
          className="text-xl font-bold text-black"
        >
          ×
        </button>
      </div>
      <ul className="flex flex-col p-6 space-y-4 text-lg font-semibold text-black">
        <li>
          <Link
            href="/"
            className={
              pathname === "/" ? "oliva-c" : "oliva-c-hover transition-colors"
            }
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            href="/aboutus"
            className={
              pathname === "/aboutus"
                ? "oliva-c"
                : "oliva-c-hover transition-colors"
            }
          >
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link
            href="/tours"
            className={
              pathname === "/tours"
                ? "oliva-c"
                : "oliva-c-hover transition-colors"
            }
          >
            Tours
          </Link>
        </li>
        <li>
          <Link
            href="/contacto"
            className={
              pathname === "/contacto"
                ? "oliva-c"
                : "oliva-c-hover transition-colors"
            }
          >
            Contacto
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
