"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Header from "@/app/Components/Header";
import ActionButton from "@/app/Components/ActionButton";
import PasswordInput from "@/app/Components/PasswordInput";

function ChangePasswordPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const { user } = useUser();
  const router = useRouter();
  
  // Verificar si el usuario se autenticó con proveedores sociales
  const isSocialUser = user?.externalAccounts && user.externalAccounts.length > 0;

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    
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
      if (!user) {
        throw new Error("Usuario no autenticado");
      }

      // Solo usuarios con email/password pueden cambiar contraseña
      if (isSocialUser) {
        setError("No puedes cambiar la contraseña porque te registraste con un proveedor social (Google/Facebook).");
        return;
      }

      // Cambiar contraseña usando Clerk con contraseña actual
      await user.updatePassword({
        newPassword: newPassword,
        currentPassword: currentPassword,
      });

      setSuccess("Contraseña cambiada exitosamente");
      
      // Limpiar formulario
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      
      // Redirigir después de 2 segundos
      setTimeout(() => {
        router.push("/micuenta/profile");
      }, 2000);
      
    } catch (err: any) {
      console.error("Error al cambiar contraseña:", err);
      setError(err.message || "Error al cambiar la contraseña");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Header />
      <main className="w-full px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-2">
        <div className="max-w-2xl mx-auto">
          {/* Franja superior verde oliva */}
          <div className="w-full bg-oliva-c py-2 mb-4 rounded-xl shadow-md">
            <h1 className="text-center text-white tracking-wide text-3xl font-bold hero-banner-title">
              Cambiar Contraseña
            </h1>
          </div>

          {/* Contenedor de formulario */}
          <section className="w-full bg-white shadow-sm rounded-xl p-4 sm:p-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {success}
              </div>
            )}

            {isSocialUser ? (
              <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="text-yellow-800 font-semibold mb-2">No disponible para usuarios sociales</h3>
                <p className="text-yellow-700 text-sm mb-4">
                  No puedes cambiar la contraseña porque te registraste con un proveedor social (Google/Facebook). 
                  Para cambiar tu contraseña, necesitarías crear una cuenta con email y contraseña.
                </p>
                <ActionButton
                  tipo="secondary"
                  title="Volver"
                  onClick={() => router.back()}
                  className="font-semibold"
                />
              </div>
            ) : (
              <form onSubmit={handleChangePassword} className="space-y-6">
                <div className="grid grid-cols-1 gap-y-4">
                  {/* Contraseña actual */}
                  <div>
                    <PasswordInput
                      name="currentPassword"
                      label="Contraseña actual"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Nueva contraseña */}
                  <div>
                    <PasswordInput
                      name="newPassword"
                      label="Nueva contraseña"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Confirmar nueva contraseña */}
                  <div>
                    <PasswordInput
                      name="confirmPassword"
                      label="Confirmar nueva contraseña"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  {/* Botones */}
                  <div className="pt-2 flex justify-center gap-4">
                    <ActionButton
                      type="submit"
                      tipo="primary"
                      title={loading ? "Cambiando..." : "Cambiar Contraseña"}
                      className="font-semibold"
                    />
                    <ActionButton
                      tipo="secondary"
                      title="Cancelar"
                      onClick={() => router.back()}
                      className="font-semibold"
                    />
                  </div>
                </div>
              </form>
            )}

            {/* Información adicional */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Requisitos de la contraseña:</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Mínimo 8 caracteres</li>
                <li>• Debe incluir al menos una letra mayúscula</li>
                <li>• Debe incluir al menos una letra minúscula</li>
                <li>• Debe incluir al menos un número</li>
                <li>• Debe incluir al menos un carácter especial</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ChangePasswordPage; 