"use client";

import React, { useState } from "react";
import logo from "@/public/logo.png";
import { IoMenu } from "react-icons/io5";
import SidebarMenu from "./SidebarMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-gray-50 shadow-sm">
      <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between p-4 lg:p-4 lg:pb-2">
        <a href="/" className="flex items-center space-x-2 pt-3 lg:pt-0">
          <img
            src={logo.src}
            alt="Logo de la empresa"
            className="lg:w-58 w-72"
          />
        </a>

        <nav className="lg:flex hidden space-x-12 items-center text-md font-semibold">
          <a href="#" className="oliva-o">
            Inicio
          </a>
          <a href="#" className="text-black oliva-o-hover">
            Sobre Nosotros
          </a>
          <a href="#" className="text-black oliva-o-hover">
            Tours
          </a>
          <a href="#" className="text-black oliva-o-hover">
            Contacto
          </a>
        </nav>

        <div className="flex flex-row justify-between w-full lg:w-fit items-center space-x-6 text-x text-md font-semibold">
          {/*  <FaLanguage  /> */}
          <IoMenu
            onClick={toggleMenu}
            className="oliva-o text-3xl lg:hidden cursor-pointer"
          />
          <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />{" "}
          <div className="flex flex-row gap-4">
            <button className="flex items-center bg-[#E6F0AC] text-black px-5 py-2 rounded-full hover:bg-[#d7e99c] transition">
              Iniciar Sesión
            </button>
            <button className="bg-oliva-c text-white px-5 py-2 rounded-full bg-oliva-o-hover transition">
              Regístrate
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
