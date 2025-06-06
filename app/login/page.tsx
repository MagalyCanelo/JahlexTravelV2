"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import EmailInput from "../Components/InputComponent";
import PasswordInput from "../Components/PasswordInput";
import Link from "next/link";
import ActionButton from "../Components/ActionButton";
import { FcGoogle } from "react-icons/fc";
import images from "@/public/acueductos2.jpg";

function page() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-dvh">
      <Image src={images} alt="Imagen tour" className="bg-pink-400 col-span-1 h-full"/>
      <section className="bg-white col-span-1 h-full">
        <Image src={logo} alt="Logo Jahlex" className="w-52 mx-auto my-4" />
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h1 className="text-5xl font-bold font-fredoka oliva-c text-white">
            Bienvenido
          </h1>
          <p className="text-stone-500">Inicia sesión</p>
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData);
            console.log(data);
          }}
          className="flex flex-col w-full  gap-0 px-32"
        >
          <div className="flex flex-col gap-4 px-8">
            <EmailInput name="email" />
            <PasswordInput name="password" />
          </div>

          <div className="flex flex-col w-full justify-center mt-4 mb-8 px-8 gap-4">
            <Link
              href="/passrecovery"
              className="text-stone-500 font-semibold hover:underline w-full text-right "
            >
              Olvidé mi contraseña
            </Link>
            <ActionButton
              type="submit"
              onClick={() => {}}
              tipo="primary"
              title="Iniciar Sesión"
            />
          </div>
          <div className="border-t-2 border-stone-300 relative w-full">
            <span>a</span>
            <p className="text-center text-stone-500 font-bold absolute -top-3 bg-white px-8 mx-auto left-0 right-0 w-fit">O</p>
          </div>
          <button className="border border-stone-200 text-black w-fit p-4 rounded-lg shadow-md flex items-center gap-2 mx-auto my-2 hover:bg-stone-100 transition">
            <FcGoogle size={32} />
          </button>
          <Link href="/register" className="text-stone-500 font-semibold hover:underline w-full text-center mt-2">
            ¿No tienes cuenta? <span className="font-bold text-black">
                Regístrate ahora</span>
            </Link>
        </form>
      </section>
    </div>
  );
}

export default page;
