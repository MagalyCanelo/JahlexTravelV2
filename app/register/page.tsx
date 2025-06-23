"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import EmailInput from "../Components/InputComponent";
import PasswordInput from "../Components/PasswordInput";
import Link from "next/link";
import ActionButton from "../Components/ActionButton";
import { FcGoogle } from "react-icons/fc";
import images from "@/public/Hero/acueductos2.jpg";
import { signInWithFirebase } from "../actions/signinFirebase";
import { useRouter } from "next/navigation";
import { createUserDoc } from "@/service/FirebaseService";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../config/config";
import { useSignUp } from "@clerk/nextjs";
import { useUserStore } from "../store/Usuario";

function RegisterPage() {
  const [onError, setOnError] = useState<string | null>(null);
  const router = useRouter();
  const { setUser } = useUserStore();
  const { isLoaded, signUp, setActive } = useSignUp();

  const handleSubmit = async (email: string, password: string) => {
    if (!isLoaded) return;

    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-dvh">
      <Image
        src={images}
        alt="Imagen tour"
        className="col-span-1 h-full object-cover"
      />
      <section className="bg-white col-span-1 h-full flex flex-col items-center justify-center">
        <Image src={logo} alt="Logo Jahlex" className="w-56 mx-auto my-6" />
        <div className="flex flex-col items-center gap-4 mb-4">
          <h1 className="text-[56px] font-bold hero-banner-title oliva-c text-white leading-14 xl:leading-20 tracking-wide">
            BIENVENIDO
          </h1>
          <p className="text-stone-600 font-semibold pb-3 text-lg">
            Regístrate
          </p>
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;
            const confirmPassword = formData.get("confirmpassword") as string;

            if (password !== confirmPassword) {
              setOnError("Las contraseñas no coinciden");
              return;
            }

            try {
              await handleSubmit(email, password);
              await signInWithFirebase(email, password);
              await createUserDoc(email, "client");
            } catch (error) {
              console.error("Error en el registro:", error);
              setOnError("Error al registrar o iniciar sesión.");
            }
          }}
          className="flex flex-col w-full gap-0 lg:px-32 px-6"
        >
          <div className="flex flex-col gap-8">
            <EmailInput name="email" />
            <PasswordInput name="password" />
            <PasswordInput
              name="confirmpassword"
              label="Confirmar contraseña"
            />
            <p className="text-red-500 font-semibold text-sm min-h-[20px]">
              {onError}
            </p>
          </div>

          <div className="flex flex-col w-full justify-center mt-4 mb-8 gap-6">
            <ActionButton
              type="submit"
              tipo="primary"
              title="Registrarse"
              className="w-full font-semibold"
            />
          </div>

          <div className="border-t-2 border-stone-300 relative w-full mb-2">
            <p className="text-center text-stone-500 font-bold absolute -top-3 bg-white px-8 mx-auto left-0 right-0 w-fit">
              O
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full mt-6">
            <div className="flex flex-col relative text-black w-full">
              <div className="px-4 py-3 border-2 border-oliva-c rounded-md flex items-center gap-2">
                <input
                  id="code"
                  name="code"
                  type="text"
                  className="outline-none w-full"
                  placeholder="Código de verificación"
                  required
                />
              </div>
            </div>

            <ActionButton
              type="button"
              tipo="primary"
              title="Verificar código"
              onClick={async () => {
                const codeInput = document.querySelector(
                  'input[name="code"]'
                ) as HTMLInputElement;
                const code = codeInput.value;

                try {
                  const completeSignup =
                    await signUp!.attemptEmailAddressVerification({ code });
                  if (completeSignup.status === "complete") {
                    if (setActive) {
                      await setActive({
                        session: completeSignup.createdSessionId,
                      });
                    }
                    await createUserDoc(
                      completeSignup.emailAddress as string,
                      "client"
                    );
                    router.push("/");
                  } else {
                    setOnError("Verificación incompleta. Intenta de nuevo.");
                  }
                } catch (err) {
                  console.error("Error al verificar código", err);
                  setOnError("Código inválido o expirado.");
                }
              }}
              className="w-full font-semibold"
            />
          </div>

          <div className="border border-stone-200 text-black w-fit p-4 rounded-lg shadow-md flex items-center gap-2 mx-auto mt-7 mb-4 hover:bg-stone-50 transition">
            <FcGoogle size={32} />
          </div>

          <Link
            href="/login"
            className="text-stone-500 font-semibold w-full text-center mt-2 mb-6"
          >
            ¿Ya tienes una cuenta?
            <span className="font-bold text-black"> Inicia sesión</span>
          </Link>
        </form>
      </section>
    </div>
  );
}

export default RegisterPage;
