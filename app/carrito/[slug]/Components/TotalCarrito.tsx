import Link from "next/link";
import React from "react";

function TotalCarrito() {
  return (
    <div className="bg-stone-50 text-stone-800 p-8 h-full grid grid-cols-4">
      <section className="col-span-1"></section>
      <section className="col-span-1"></section>
      <section className="col-span-1"></section>
      <section className="col-span-1 w-full flex flex-col gap-4">
        <h1 className="text-lg font-bold">Total del carrito</h1>
        <section className="grid grid-cols-1 grid-rows-3 w-full">
          <div className="row-span-2 h-full">
            <p className="grid grid-cols-2 border-stone-300 items-center justify-between border-y border-x p-1">
              Subtotal<span>$99</span>
            </p>
            <p className="grid grid-cols-2 border-stone-300 items-center justify-between border-b border-x p-1">
              Total<span>$99</span>
            </p>
          </div>
          <Link
            href={"/pago/codigodepago"}
            className="row-span-1 flex flex-row items-center justify-center w-full bg-oliva-c text-white font-semibold p-2 rounded-full"
          >
            Finalizar compra
          </Link>
        </section>
      </section>
    </div>
  );
}

export default TotalCarrito;
