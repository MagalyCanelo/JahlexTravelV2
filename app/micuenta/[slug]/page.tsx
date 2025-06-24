import Header from "@/app/Components/Header";
import React from "react";
import DatosGroup from "./Components/DatosGroup";

function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Header />
      <main className="w-full px-4 py-2 sm:px-6 sm:py-4 md:px-8 md:py-2">
        <DatosGroup />
      </main>
    </div>
  );
}

export default Page;
