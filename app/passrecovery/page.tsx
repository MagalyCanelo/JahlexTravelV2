"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import EmailInput from "../Components/InputComponent";
import PasswordInput from "../Components/PasswordInput";
import Link from "next/link";
import ActionButton from "../Components/ActionButton";
import images from "@/public/Hero/acueductos2.jpg";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function PassRecoveryPage() {
  const [step, setStep] = useState<"email" | "code" | "newPassword">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [clerkSignIn, setClerkSignIn] = useState<any>(null); // nuevo estado

  
  const { signIn, setActive } = useSignIn();
  const router = useRouter();

  const handleSendResetCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (!signIn) {
        throw new Error("SignIn no disponible");
      }

      const result = await signIn.create({
        identifier: email,
        strategy: "email_link",
      });
      setClerkSignIn(result); // guardar el flujo creado
      setSuccess("Código de recuperación enviado a tu correo electrónico");
      setStep("code");
      
    } catch (err: any) {
      console.error("Error al enviar código:", err);
      setError(err.message || "Error al enviar el código de recuperación");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      if (!clerkSignIn) {
        throw new Error("SignIn no disponible");
      }

      const result = await clerkSignIn.attemptFirstFactor({
        strategy: "email_link",
        code,
      });

      if (result.status === "needs_new_password") {
        setStep("newPassword");
      } else {
        setError("Código inválido o expirado");
      }
    } catch (err: any) {
      console.error("Error al verificar código:", err);
      setError(err.message || "Error al verificar el código");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      setLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      setLoading(false);
      return;
    }
    
    try {
      if (!signIn) {
        throw new Error("SignIn no disponible");
      }

      const result = await clerkSignIn.attemptFirstFactor({
        strategy: "email_link",
        code,
        password: newPassword,
      });

      if (result.status === "complete") {
        setSuccess("Contraseña cambiada exitosamente");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        setError("Error al cambiar la contraseña");
      }
    } catch (err: any) {
      console.error("Error al cambiar contraseña:", err);
      setError(err.message || "Error al cambiar la contraseña");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-dvh">
      <Image
        src={images}
        alt="Imagen tour"
        className="col-span-1 h-full object-cover"
        fetchPriority="high"
      />
      <section className="bg-white col-span-1 h-full flex flex-col items-center justify-center">
        <Image src={logo} alt="Logo Jahlex" className="w-56 mx-auto my-6" />
        <div className="flex flex-col items-center gap-4 mb-4">
          <h1 className="text-[56px] font-bold hero-banner-title oliva-c text-white leading-14 xl:leading-20 tracking-wide">
            RECUPERAR CONTRASEÑA
          </h1>
          <p className="text-stone-600 font-semibold pb-3 text-lg">
            {step === "email" && "Ingresa tu correo electrónico"}
            {step === "code" && "Ingresa el código de verificación"}
            {step === "newPassword" && "Ingresa tu nueva contraseña"}
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-full max-w-md">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 w-full max-w-md">
            {success}
          </div>
        )}

        <div className="flex flex-col w-full gap-6 lg:px-32 px-6">
          {step === "email" && (
            <form onSubmit={handleSendResetCode} className="flex flex-col gap-6">
              <EmailInput 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <ActionButton
                type="submit"
                tipo="primary"
                title={loading ? "Enviando..." : "Enviar código"}
                className="w-full font-semibold"
                disabled={loading}
              />
            </form>
          )}

          {step === "code" && (
            <form onSubmit={handleVerifyCode} className="flex flex-col gap-6">
              <div className="flex flex-col relative text-black w-full">
                <div className="px-4 py-3 border-2 border-oliva-c rounded-md flex items-center gap-2">
                  <input
                    id="code"
                    name="code"
                    type="text"
                    className="outline-none w-full"
                    placeholder="Código de verificación"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                </div>
              </div>
              <ActionButton
                type="submit"
                tipo="primary"
                title={loading ? "Verificando..." : "Verificar código"}
                className="w-full font-semibold"
                disabled={loading}
              />
            </form>
          )}

          {step === "newPassword" && (
            <form onSubmit={handleResetPassword} className="flex flex-col gap-6">
              <PasswordInput
                name="newPassword"
                label="Nueva contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <PasswordInput
                name="confirmPassword"
                label="Confirmar nueva contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <ActionButton
                type="submit"
                tipo="primary"
                title={loading ? "Cambiando..." : "Cambiar contraseña"}
                className="w-full font-semibold"
                disabled={loading}
              />
            </form>
          )}

          <div className="flex flex-col gap-4 mt-6">
            <Link
              href="/login"
              className="text-stone-500 font-semibold text-center text-sm hover:text-oliva-c transition-colors"
            >
              Volver al inicio de sesión
            </Link>
            
            {step !== "email" && (
              <Link
                href="/cambiar-contrasena"
                className="text-stone-500 font-semibold text-center text-sm hover:text-oliva-c transition-colors"
              >
                Cambiar contraseña
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PassRecoveryPage; 