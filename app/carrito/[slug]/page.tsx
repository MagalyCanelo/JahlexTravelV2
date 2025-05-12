import Header from "@/app/Components/Header";
import React from "react";
import ToursTable from "./Components/ToursTable";
import TotalCarrito from "./Components/TotalCarrito";
import Footer from "@/app/Components/Footer";

function page() {
  return (
    <>
      <Header />
      <ToursTable />
      <TotalCarrito />
      <Footer/>
    </>
  );
}

export default page;
