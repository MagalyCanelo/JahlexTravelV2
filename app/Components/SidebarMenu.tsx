import React from "react";

const SidebarMenu = (props: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
        props.isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <div className="flex justify-end p-4">
        <button onClick={props.onClose} className="text-xl font-bold text-black">
          ×
        </button>
      </div>
      <ul className="flex flex-col p-6 space-y-4 text-lg font-semibold text-black">
        <li>
          <a href="#" className="oliva-o">
            Inicio
          </a>
        </li>
        <li>
          <a href="#">Sobre Nosotros</a>
        </li>
        <li>
          <a href="#">Tours</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
