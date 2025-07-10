"use client";
import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import ActionButton from "@/app/Components/ActionButton";
import PasswordInput from "@/app/Components/PasswordInput";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const { user } = useUser();
  
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
      
      // Ocultar mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
      
    } catch (err: any) {
      console.error("Error al cambiar contraseña:", err);
      setError(err.message || "Error al cambiar la contraseña");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
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
          </div>
        ) : (
          <form onSubmit={handleChangePassword} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {/* Contraseña actual */}
              <div className="md:col-span-2">
                <PasswordInput
                  name="currentPassword"
                  label="Contraseña actual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                />
              </div>

              {/* Nueva contraseña */}
              <div className="md:col-span-2">
                <PasswordInput
                  name="newPassword"
                  label="Nueva contraseña"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>

              {/* Confirmar nueva contraseña */}
              <div className="md:col-span-2">
                <PasswordInput
                  name="confirmPassword"
                  label="Confirmar nueva contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {/* Botón */}
              <div className="md:col-span-2 pt-2 flex justify-start">
                <ActionButton
                  type="submit"
                  tipo="primary"
                  title={loading ? "Cambiando..." : "Cambiar Contraseña"}
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
  );
}

export default ChangePassword; 