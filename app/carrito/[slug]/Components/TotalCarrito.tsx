"use client";
import { add } from "@/app/actions";
import { api } from "@/app/api";
import { ShoppingCarTour } from "@/app/interface/Tour";
import { useShoppingCar } from "@/app/store/ToursStore";
import { useUserStore } from "@/app/store/Usuario";
import { randomUUID } from "crypto";
import Link from "next/link";
import { useState } from "react";

function TotalCarrito() {
  const useUser = useUserStore();
  const { tours } = useShoppingCar();
  const subtotal = (tours ?? []).reduce(
    (acc, tour) => acc + tour.price * tour.quantity,
    0
  );
  const total = subtotal * 1.18;

  return (
    <div className="px-6 pt-2 pb-6 bg-stone-50">
      <div className="max-w-md mx-auto sm:ml-auto sm:mr-0 bg-white shadow-sm rounded-2xl p-5">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
          Total del carrito
        </h2>

        <table className="min-w-full text-sm text-gray-700">
          <tbody>
            <tr className="border-b border-stone-200">
              <td className="px-4 py-2 text-left font-medium">
                Total (incl. IGV)
              </td>
              <td className="px-4 py-2 text-right sm:text-center">
                PEN {subtotal.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>

        <Link
          href="/pago/codigodepago"
          className="block mt-6 w-full bg-oliva-c bg-oliva-o-hover text-white font-semibold text-center py-2 rounded-full transition"
        >
          Finalizar compra
        </Link>
      </div>
    </div>
  );
}

export default TotalCarrito;
