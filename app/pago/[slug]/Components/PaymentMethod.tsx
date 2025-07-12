"use client";
import { add } from "@/app/actions";
import { useShoppingCar } from "@/app/store/ToursStore";
import { useUserStore } from "@/app/store/Usuario";
import izipay from "@/public/izipay.png";
import Image from "next/image";
import { useState } from "react";

const PaymentMethod = () => {
  const [loading, setLoading] = useState(false);
  const useUser = useUserStore();
  const { tours } = useShoppingCar();

  const handleMercadoPago = async () => {
    setLoading(true);
    try {
      if (!useUser.user.isAuthenticated || !useUser.user.id) {
        alert("Debes iniciar sesión para pagar con Mercado Pago");
        setLoading(false);
        return;
      }
      if (useUser.user.email && useUser.user.id) {
        const email = useUser!.user!.email!;
        const id = useUser!.user!.id!;
        add({ tours }, id, email);
      }
    } catch (e) {
      alert("Error al conectar con Mercado Pago");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-3">Método de pago</h2>
      <button
        onClick={handleMercadoPago}
        disabled={loading}
        className="block mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center py-2 rounded-full transition disabled:opacity-60"
      >
        {loading ? "Redirigiendo a Mercado Pago..." : "Pagar con Mercado Pago"}
      </button>
      <label className="flex items-center mt-4 text-xs lg:text-[12.5px] xl:text-md gap-1">
        <input type="checkbox" required className="w-3 h-3 accent-stone-500" />
        <span>
          Declaro que he leído y aceptado los{" "}
          <a
            href="/terminos-y-condiciones"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-600 hover:text-gray-800"
          >
            términos y condiciones
          </a>
          .
        </span>
      </label>
    </div>
  );
};

export default PaymentMethod;
