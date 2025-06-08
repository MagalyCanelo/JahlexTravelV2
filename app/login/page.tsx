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
import { logInWithFirebase } from "../actions/signinFirebase";
import { useUserStore } from "../store/Usuario";
import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/config";
import { createUserDoc } from "@/service/FirebaseService";

function page() {
  const { setUser } = useUserStore();

  const router = useRouter();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-dvh">
      <Image
        src={images}
        alt="Imagen tour"
        className="bg-pink-400 col-span-1 h-full"
      />
      <section className="bg-white col-span-1 h-full flex flex-col items-center justify-center">
        <Image src={logo} alt="Logo Jahlex" className="w-60 mx-auto my-6" />
        <div className="flex flex-col items-center justify-center gap-4 mb-4">
          <h1 className="text-[56px] font-bold hero-banner-title oliva-c text-white leading-14 xl:leading-20 tracking-wide">
            BIENVENIDO
          </h1>
          <p className="text-stone-600 font-semibold pb-3 text-lg">
            Inicia Sesión
          </p>
        </div>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const data = Object.fromEntries(formData);
            logInWithFirebase(
              data.email as string,
              data.password as string
            ).then((user) => {
              if (user) {
                setUser({
                  id: user.uid || "",
                  email: user.email || "",
                  name: user.displayName || "",
                  isAuthenticated: true,
                });
                createUserDoc(user.email!, "client").then(
                  () => user && router.push("/")
                );
              }
            });
          }}
          className="flex flex-col w-full  gap-0 px-32"
        >
          <div className="flex flex-col gap-8 px-2">
            <EmailInput name="email" />
            <PasswordInput name="password" />
          </div>

          <div className="flex flex-col w-full justify-center mt-4 mb-8 px-2 gap-6">
            <Link
              href="/passrecovery"
              className="text-stone-500 font-semibold w-full text-right text-sm"
            >
              Olvidé mi contraseña
            </Link>
            <div className="font-semibold w-full">
              <ActionButton
                type="submit"
                onClick={() => {}}
                tipo="primary"
                title="Iniciar Sesión"
                className="w-full" // Esto asegura que el botón ocupe todo el ancho
              />
            </div>
          </div>
          <div className="border-t-2 border-stone-300 relative w-full">
            <span>a</span>
            <p className="text-center text-stone-500 font-bold absolute -top-3 bg-white px-8 mx-auto left-0 right-0 w-fit">
              O
            </p>
          </div>
          <button
            onClick={() => {
              const provider = new GoogleAuthProvider();
              signInWithPopup(auth, provider)
                .then((result) => {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                  const token = credential?.accessToken;
                  // The signed-in user info.
                  const user = result.user;
                  // IdP data available using getAdditionalUserInfo(result)
                  setUser({
                    isAuthenticated: user.emailVerified,
                    email: user.email ?? undefined,
                    id: user.uid,
                    image:user.photoURL,
                    name: user.displayName ?? undefined,
                  });
                  createUserDoc(user.email!, "client").then(
                    () => user && router.push("/")
                  );
                  // ...
                })
                .catch((error) => {
                  // Handle Errors here.
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  // The email of the user's account used.
                  const email = error.customData.email;
                  // The AuthCredential type that was used.
                  const credential =
                    GoogleAuthProvider.credentialFromError(error);
                  // ...
                });
            }}
            className="border border-stone-200 text-black w-fit p-4 rounded-lg shadow-md flex items-center gap-2 mx-auto my-2 hover:bg-[#f2ffe3] transition mb-4"
          >
            <FcGoogle size={32} />
          </button>
          <Link
            href="/register"
            className="text-stone-500 font-semibold w-full text-center mt-2 mb-5"
          >
            ¿No tienes cuenta?{" "}
            <span className="font-bold text-black">Regístrate ahora</span>
          </Link>
        </form>
      </section>
    </div>
  );
}

export default page;
