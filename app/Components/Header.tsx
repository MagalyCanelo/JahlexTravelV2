"use client";

import logo from "@/public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import ActionButton from "./ActionButton";
import SidebarMenu from "./SidebarMenu";
import TopBar from "./TopBar";
import Image from "next/image";

const Header = (props: { className?: string; onClick?: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const pathname = usePathname();

  return (
    <header className={`w-full bg-gray-50 shadow-sm ${props.className}`}>
      <TopBar />
      <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between p-4 lg:p-4 lg:pb-2">
        <Link href="/" className="flex items-center space-x-2 pt-3 lg:pt-0">
          <Image
            src={logo.src}
            alt="Logo de la empresa"
            className="lg:w-50 w-60 xl:w-65"
            height={100}
            width={100}
          />
        </Link>

        <nav className="lg:flex hidden space-x-12 items-center lg:text-md xl:text-lg font-semibold">
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
