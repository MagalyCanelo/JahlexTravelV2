"use client";
import Image from "next/image";
import rnp from "@/public/rnp.jpg";
import { useEffect, useState } from "react";
import { ShoppingCarTour } from "@/app/interface/Tour";
import { getUserShoppingCar } from "@/service/FirebaseService";

export default function ShoppingDetails() {
  const [userShoppingCar, setUserShoppingCar] =
    useState<ShoppingCarTour | null>(null);
  useEffect(() => {
    getUserShoppingCar("123456").then((v) => {
      console.log(v);
      setUserShoppingCar(v);
    });
  }, []);
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm w-full">
      {/* Imagen y detalles del tour */}
      {userShoppingCar &&
        userShoppingCar.tours.map((v) => (
          <div
            key={v.id}
            className="flex flex-col lg:flex-row gap-4 items-start mb-6"
          >
            <div className="w-full lg:w-40 h-60 lg:h-32 relative rounded overflow-hidden">
              <Image
                src={v.images?.[0] || rnp}
                alt="Caño Cristales"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col gap-0 w-full">
              {/* Título y precio */}
              <div className="flex flex-row justify-between items-center w-full text-gray-800 mb-1">
                <h2 className="text-lg font-bold oliva-o">{v.title}</h2>
                <span className="text-[15px] font-semibold pr-2 text-gray-800 ml-auto">
                  PEN {v.price.toFixed(2)}
                </span>
              </div>

              <p className="text-sm text-gray-700">
                <strong>Fecha:</strong> {v.date}
                <br />
                <strong>Hora:</strong> {v.hour}
                <br />
                <strong>Idioma:</strong> Español
                <br />
                <strong>Reserva:</strong> {v.quantity} personas
              </p>
            </div>
          </div>
        ))}

      {/* Totales con fondo gris claro */}
      <div className="bg-[#f7f9ed] p-4 rounded-md space-y-1 text-sm mb-6">
        <div className="flex justify-between text-gray-800">
          <span>Subtotal:</span>
          <span className="font-medium text-gray-700">
            PEN{" "}
            {userShoppingCar?.tours
              .reduce((acc, tour) => acc + tour.price, 0)
              .toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-gray-800">
          <span>Impuesto:</span>
          <span className="font-medium text-gray-700">
            PEN{" "}
            {(
              (userShoppingCar?.tours ?? []).reduce(
                (acc, tour) => acc + tour.price,
                0
              ) * 0.18
            ).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-gray-800">
          <span>Descuento:</span>
          <span className="font-medium text-gray-700">PEN 0.00</span>
        </div>
        <div className="flex justify-between oliva-o font-semibold text-md">
          <span>Total:</span>
          <span>
            PEN{" "}
            {(
              (userShoppingCar?.tours ?? []).reduce(
                (acc, tour) => acc + tour.price,
                0
              ) * 1.18
            ).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Campo de cupón */}
      <div className="bg-[#f7f9ed] py-4 px-6 rounded-md">
        <div className="flex lg:flex-row flex-col items-center gap-4 mb-4">
          <label className="text-md font-semibold text-gray-800 whitespace-nowrap">
            Ingresa código de descuento:
          </label>
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 flex-1 text-gray-600 text-md bg-white"
            placeholder="Código de descuento"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-oliva-c text-white px-4 py-2 rounded font-semibold bg-oliva-o-hover">
            Aplicar cupón
          </button>
        </div>
      </div>
    </div>
  );
}
