import Header from "@/app/Components/Header";
import React from "react";
import { BaseTourExtended } from "@/app/interface/Tour";
import PurchaseList from "./Components/PurchaseList";

function page() {
  return (
    <div className="text-black">
      <Header />
      <h1 className="pl-8 pt-4 text-3xl">Mis compras</h1>
      <main className="grid grid-cols-8 px-8 pt-4">
        <div className="flex flex-col gap-8 col-span-8 h-96 overflow-auto">
          <PurchaseList />
        </div>
      </main>
    </div>
  );
}

export default page;
