import Header from "@/app/Components/Header";
import React from "react";
import DatosGroup from "./Components/DatosGroup";

function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Header />
      <main className="w-full p-4 sm:p-6 md:p-8">
        <DatosGroup />
      </main>
    </div>
  );
}

export default Page;
