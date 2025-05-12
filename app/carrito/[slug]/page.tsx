import Header from "@/app/Components/Header";
import React from "react";
import ToursTable from "./Components/ToursTable";
import TotalCarrito from "./Components/TotalCarrito";
import Footer from "@/app/Components/Footer";

function page() {
  return (
    <div className="h-screen">
      <Header />
      <ToursTable />
      <TotalCarrito />
      <Footer/>
    </div>
  );
}

export default page;
