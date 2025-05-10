"use client";

import React, { useState } from "react";
import logo from "@/public/logo.png";
import { IoMenu } from "react-icons/io5";
import SidebarMenu from "./SidebarMenu";
import ActionButton from "./ActionButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = (props: { className?: string; onClick?: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const pathname = usePathname();

  return (
    <header className={`w-full bg-gray-50 shadow-sm ${props.className}`}>
      <nav className="bg-oliva-o px-2 py-1.5 text-xs xl:sm xl:py-2">
        <div className="flex flex-row w-full items-center justify-start gap-2">
          <p>
            <strong>Celular:</strong> +51 147 852 369
          </p>
          <p>correo@gmail.com</p>
        </div>
      </nav>
      <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between p-4 lg:p-4 lg:pb-2">
        <Link href="/" className="flex items-center space-x-2 pt-3 lg:pt-0">
          <img
            src={logo.src}
            alt="Logo de la empresa"
            className="lg:w-58 w-72 xl:w-65"
          />
        </Link>

        <nav className="lg:flex hidden space-x-12 items-center text-md xl:text-lg font-semibold">
          <Link
            href="/"
            className={
              pathname === "/" ? "oliva-o" : "text-black oliva-o-hover"
            }
          >
            Inicio
          </Link>
          <Link
            href="/aboutus"
            className={
              pathname === "/aboutus" ? "oliva-o" : "text-black oliva-o-hover"
            }
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/tours"
            className={
              pathname === "/tours" ? "oliva-o" : "text-black oliva-o-hover"
            }
          >
            Tours
          </Link>
          <Link
            href="/contacto"
            className={
              pathname === "/contacto" ? "oliva-o" : "text-black oliva-o-hover"
            }
          >
            Contacto
          </Link>
          <Link
            href={"/administrador"}
            className={
              pathname === "/administrador"
                ? "oliva-o"
                : "text-black oliva-o-hover"
            }
          >
            Administrador{" "}
          </Link>
        </nav>

        <div className="flex flex-row justify-between w-full lg:w-fit items-center space-x-6 text-x text-md xl:text-lg font-semibold">
          {/*  <FaLanguage  /> */}
          <IoMenu
            onClick={toggleMenu}
            className="oliva-o text-3xl lg:hidden cursor-pointer"
          />
          <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />{" "}
          <div className="flex flex-row gap-4">
            <ActionButton
              onClick={() => {}}
              tipo="secondary"
              title="Iniciar Sesión"
            />
            <ActionButton
              onClick={() => {}}
              tipo="primary"
              title="Regístrate"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
