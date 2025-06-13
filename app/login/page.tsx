"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo.png";
import EmailInput from "../Components/InputComponent";
import PasswordInput from "../Components/PasswordInput";
import Link from "next/link";
import ActionButton from "../Components/ActionButton";
import { FcGoogle } from "react-icons/fc";
import images from "@/public/Hero/acueductos2.jpg";

import { useUserStore } from "../store/Usuario";
import { useRouter } from "next/navigation";
import { createUserDoc } from "@/service/FirebaseService";
import { SignInButton, useAuth, useSignIn } from "@clerk/nextjs";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../config/config";

function page() {
  const { setUser } = useUserStore();

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signIn, setActive } = useSignIn();
  const { getToken } = useAuth();
  const logInWithFirebaseViaClerk = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      // 1️⃣ Login en Clerk
      const res = await signIn!.create({ identifier: email, password });
      if (res.status !== "complete") {
        throw new Error("Clerk sign-in not completed");
      }

      // 2️⃣ Activar sesión Clerk
      if (setActive) {
        await setActive({ session: res.createdSessionId });
      }

      // 3️⃣ Obtener token para Firebase
      const firebaseToken = await getToken({
        template: "integration_firebase",
      });
      if (!firebaseToken)
        throw new Error("No integration_firebase token available");

      // 4️⃣ Iniciar sesión en Firebase con token
      const userCred = await signInWithCustomToken(auth, firebaseToken);
      const fbUser = userCred.user;

      console.log("Firebase user:", {
        uid: fbUser.uid,
        email: fbUser.email,
        displayName: fbUser.displayName,
        photoURL: fbUser.photoURL,
        token: await fbUser.getIdToken(),
        isAuthenticated: fbUser.emailVerified,
      });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

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
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;
            await logInWithFirebaseViaClerk(email, password);
            router.push("/");
          }}
          className="flex flex-col w-full  gap-0 lg:px-32 px-2"
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
            <span> </span>
            <p className="text-center text-stone-500 font-bold absolute -top-3 bg-white px-8 mx-auto left-0 right-0 w-fit">
              O
            </p>
          </div>

          <div className="border border-stone-200 shadow rounded-lg w-fit mt-4 mb-2 p-2 mx-auto">
            <SignInButton forceRedirectUrl={"/"}>
              <FcGoogle size={32} />
            </SignInButton>
          </div>
          <Link
            href="/register"
            className="text-stone-500 font-semibold w-full text-center mt-2 mb-5"
          >
            ¿No tienes cuenta?
            <span className="font-bold text-black">Regístrate ahora</span>
          </Link>
        </form>
      </section>
    </div>
  );
}

export default page;
