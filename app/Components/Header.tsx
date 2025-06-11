"use client";
import { useState, useEffect, useRef } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import ActionButton from "./ActionButton";
import SidebarMenu from "./SidebarMenu";
import TopBar from "./TopBar";
import Image from "next/image";
import { useUserStore } from "../store/Usuario";
import { SignedOut, SignOutButton, useUser } from "@clerk/nextjs";
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";

const Header = (props: { className?: string; onClick?: () => void }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú de usuario
  const userMenuRef = useRef<HTMLDivElement>(null); // Aquí estamos especificando que userMenuRef es un div
  const clerkUser = useUser();
  const pathname = usePathname();
  const router = useRouter();
  const user = useUserStore();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleUserClick = () => {
    setUserMenuOpen((prev) => !prev); // Alterna la visibilidad del menú de usuario
  };

  // Cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (clerkUser.user) {
      user.setUser({
      isAuthenticated: true,
      email: clerkUser.user.emailAddresses?.[0]?.emailAddress ?? "",
      id: clerkUser.user.id,
      image: clerkUser.user.imageUrl,
      name: clerkUser.user.username ?? "",
      });
    } else {
      user.setUser({
      isAuthenticated: false,
      email: "",
      id: "",
      image: "",
      name: "",
      });
    }
  }, [clerkUser.user]);

  return (
    <header
      className={`w-full ${
        pathname !== "/"
          ? "!bg-stone-50 relative top-0 text-black"
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
                : "oliva-c-hover"
            }
          >
            Inicio
          </Link>
          <Link
            href="/aboutus"
            className={
              pathname === "/aboutus"
                ? "oliva-c  transition-all"
                : pathname !== "/"
                  ? "text-black oliva-c-hover transition-all"
                  : "hover:border-b-2 hover:border-white "
            }
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/tours"
            className={
              pathname === "/tours"
                ? "oliva-c  transition-all"
                : pathname !== "/"
                  ? "text-black oliva-c-hover transition-all"
                  : "hover:border-b-2 hover:border-white "
            }
          >
            Tours
          </Link>
          <Link
            href="/contacto"
            className={
              pathname === "/contacto"
                ? "oliva-c  transition-all"
                : pathname !== "/"
                  ? "text-black oliva-c-hover  transition-all"
                  : "hover:border-b-2 hover:border-white "
            }
          >
            Contacto
          </Link>
        </nav>

        <div className="flex flex-row text-sm pr-1 lg:text-lg md:text-md justify-between w-full lg:w-fit items-center space-x-6 text-x text-md xl:text-lg font-semibold">
          <IoMenu
            onClick={toggleMenu}
            className="oliva-c text-3xl lg:hidden cursor-pointer"
          />
          <SidebarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

          {!user.user.isAuthenticated ? (
            <div className="flex flex-row gap-4">
              <ActionButton
                onClick={() => {
                  router.push("/login");
                }}
                tipo="secondary"
                title="Iniciar Sesión"
              />
              <ActionButton
                onClick={() => {
                  router.push("/register");
                }}
                tipo="primary"
                title="Regístrate"
              />
            </div>
          ) : (
            <>
              {/* Ícono de usuario con opciones */}
              <div className="relative" ref={userMenuRef}>
                <FiUser
                  className="h-6 w-6 cursor-pointer"
                  onClick={handleUserClick} // Abre o cierra el menú
                />
                {userMenuOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-36 bg-white border rounded-lg shadow-lg z-10">
                    {/* "Cachito" en la parte superior */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[-8px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-white z-20" />

                    <ul className="text-[13px] font-medium flex flex-col text-gray-600">
                      <Link href={`/micuenta/${user.user!.id}`} className="p-1.5 hover:text-gray-800 hover:rounded-lg cursor-pointer text-center">
                        Mi Cuenta
                      </Link>
                      <Link href={`/compras/${user.user!.id}`} className="p-1.5 hover:text-gray-800 hover:rounded-lg cursor-pointer text-center">
                        Mis Compras
                      </Link>
                      <Link href={`/resenas/${user.user!.id}`} className="p-1.5 hover:text-gray-800 hover:rounded-lg cursor-pointer text-center">
                        Mis Reseñas
                      </Link>
                      <SignOutButton redirectUrl="/">
                        <button
                          onClick={() => {
                            user.clearUser();
                          }}
                          className="p-1.5 hover:text-gray-800 hover:rounded-lg cursor-pointer text-center"
                        >
                          Cerrar Sesión
                        </button>
                      </SignOutButton>
                    </ul>
                  </div>
                )}
              </div>
              <FiHeart className="h-6 w-6" />
              <Link href={`/carrito/${user.user.id}`}>
                <FiShoppingBag className="h-6 w-6 cursor-pointer" />
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
