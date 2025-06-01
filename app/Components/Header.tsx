"use client";

import logo from "@/public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import ActionButton from "./ActionButton";
import SidebarMenu from "./SidebarMenu";
import TopBar from "./TopBar";
import Image from "next/image";

const Header = (props: { className?: string; onClick?: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const pathname = usePathname();
  useEffect(() => {}, []);

  return (
    <header
      className={`w-full ${
        pathname !== "/"
          ? "!bg-stone-50 relative top-0 shadow text-black"
          : "absolute top-0 text-white"
      } z-50 ${props.className} transition-all duration-100 ease-in-out `}
    >
      <TopBar />
      
      <div className="w-full flex lg:flex-row flex-col-reverse items-center justify-between p-4 lg:p-4 lg:pb-2">
        <Link href="/" className="flex items-center space-x-2 pt-3 lg:pt-0">
          <Image
            src={logo.src}
            alt="Logo de la empresa"
            className="lg:w-50 w-60 xl:w-65"
            height={1080}
            width={1080}
          />
        </Link>

        <nav className="lg:flex hidden space-x-8 items-center lg:text-md xl:text-lg font-semibold">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "border-b-2 border-white px-2 transition-all"
                : "oliva-c-hover "
            }
          >
            Inicio
          </Link>
          <Link
            href="/aboutus"
            className={
              pathname === "/aboutus"
              ? "oliva-c px-4 transition-all"
              : pathname !== "/"
              ? "text-black oliva-c-hover px-4 transition-all"
              : "hover:border-b-2 hover:border-white "
            }
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/tours"
            className={
              pathname === "/tours"
              ? "oliva-c px-4 transition-all"
              : pathname !== "/"
              ? "text-black oliva-c-hover px-4 transition-all"
              : "hover:border-b-2 hover:border-white "
            }
          >
            Tours
          </Link>
            <Link
            href="/contacto"
            className={
              pathname === "/contacto"
              ? "oliva-c px-4 transition-all"
              : pathname !== "/"
              ? "text-black oliva-c-hover px-4 transition-all"
              : "hover:border-b-2 hover:border-white "
            }
            >
            Contacto
            </Link>
            <Link
            href={"/administrador"}
            className={
              pathname === "/administrador"
              ? "oliva-c px-4 transition-all duration-150"
              : pathname !== "/"
              ? "text-black oliva-c-hover px-4 transition-all duration-150"
              : "hover:border-b-2 hover:border-white px-2 "
            }
            >
            Administrador{" "}
            </Link>
        </nav>

        <div className="flex flex-row text-sm lg:text-lg md:text-md justify-between w-full lg:w-fit items-center space-x-6 text-x text-md xl:text-lg font-semibold">
          {/*  <FaLanguage  /> */}
          <IoMenu
            onClick={toggleMenu}
            className="oliva-c text-3xl lg:hidden cursor-pointer"
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
