"use client";
import Header from "@/app/Components/Header";
import React from "react";
import PurchaseList from "./Components/PurchaseList";

function Page() {
  return (
    <div className="text-black">
      <Header />

      {/* Franja de título con margen horizontal */}
      <div className="mx-8 mt-2 bg-oliva-c py-2 rounded-xl shadow-md">
        <h1 className="text-center text-white tracking-wide text-3xl font-bold hero-banner-title">
          Mis Compras
        </h1>
      </div>

      {/* Contenido principal con mismo margen */}
      <main className="mx-8 mt-6">
        <div className="flex flex-col gap-8 h-96 overflow-auto">
          <PurchaseList />
        </div>
      </main>
    </div>
  );
}

export default Page;
