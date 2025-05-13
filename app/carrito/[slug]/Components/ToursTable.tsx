"use client";
import ActionButton from "@/app/Components/ActionButton";
import { ShoppingCarTour } from "@/app/interface/Tour";
import { useShoppingCar } from "@/app/store/ToursStore";
import { getUserShoppingCar } from "@/service/FirebaseService";
import React, { useEffect, useState } from "react";

function ToursTable() {
  const [openModal, setOpenModal] = useState(false);
  const shoppingCar = useShoppingCar();
  const [userShoppingCar, setUserShoppingCar] =
    useState<ShoppingCarTour | null>(null);
  useEffect(() => {
    getUserShoppingCar("123456").then((v) => {
      console.log(v);
      setUserShoppingCar(v);
      shoppingCar.setTours(v?.tours!);
    });
  }, []);
  return (
    <div className="p-8 bg-stone-50 h-96 overflow-auto">
      <dialog
        open={openModal}
        className="bg-white m-auto p-4 rounded-lg border border-stone-400 shadow"
      >
        <h1 className="font-semibold text-center">Confirmar eliminación</h1>
        <div className="flex flex-row gap-4 w-full mt-4">
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className=" cursor-pointer bg-red-500 hover:bg-red-600 font-semibold text-white px-4 py-2 rounded-lg"
          >
            Remover
          </button>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className=" cursor-pointer border-2 text-stone-500 hover:text-black hover:font-semibold hover:border-black transition-all border-stone-500 px-4 py-2 rounded-lg"
          >
            Cancelar
          </button>
        </div>
      </dialog>
      <table className="min-w-full bg-stone-50 border border-gray-300 ">
        <thead>
          <tr className="text-stone-800">
            <th className="px-6 py-3 border-b text-left text-xs font-bold uppercase tracking-wider"></th>
            <th className="px-6 py-3 border-b text-left text-xs font-bold uppercase tracking-wider">
              Tour
            </th>
            <th className="px-6 py-3 border-b text-left text-xs font-bold uppercase tracking-wider">
              Precio
            </th>
            <th className="px-6 py-3 border-b text-left text-xs font-bold uppercase tracking-wider">
              Fecha Reservada
            </th>
            <th className="px-6 py-3 border-b text-left text-xs font-bold uppercase tracking-wider">
              Hora
            </th>
            <th className="px-3 py-3 border-b text-left text-xs font-bold uppercase tracking-wider">
              Pasajeros
            </th>
          </tr>
        </thead>

        <tbody>
          {userShoppingCar?.tours.map((v) => {
            return (
              <tr className="hover:bg-gray-50 text-black">
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={4}
                      stroke="currentColor"
                      className="size-6 text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  {v.title}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  PEN {v.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  {v.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap border-b">
                  {v.hour}
                </td>
                <td className="px-3 py-4 whitespace-nowrap border-b">
                  {v.quantity}
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap border-b"></td>
            <td className="px-6 py-4 whitespace-nowrap border-b"></td>
            <td className="px-6 py-4 whitespace-nowrap border-b"></td>
            <td className="px-6 py-4 whitespace-nowrap border-b"></td>
            <td className="px-3 py-4 whitespace-nowrap border-b">
              <button className="bg-stone-400 px-2 py-1 rounded-lg">
                Actualizar carrito
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ToursTable;
